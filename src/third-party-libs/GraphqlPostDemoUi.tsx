//@ts-nocheck
import React, { useEffect, useState } from 'react';
import GoBackToHome from '../components/GoBacktoHome';

export const GraphqlPostDemoUi = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGraphqlPosts = async () => {
    setLoading(true);
    const res = await fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          posts {
            id
            title
            content
            likes
            comments {
              id
              text
            }
          }
        }`
      })
    });
    const { data } = await res.json();
    setPosts(data?.posts || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchGraphqlPosts();
  }, []);

  return (
    <div>
      <GoBackToHome />
      <h2>GraphQL: Posts with Likes and Comments</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '1rem' }}>
              <h3>{post.title} ({post.likes} 👍)</h3>
              <p>{post.content}</p>
              <strong>Comments:</strong>
              <ul>
                {post.comments.map(comment => (
                  <li key={comment.id}>{comment.text}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
