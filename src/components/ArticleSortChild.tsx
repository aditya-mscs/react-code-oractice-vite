import { ArticlesDataI } from "../utils/Utils";

function ArticleSortChild({ articles }: { articles: ArticlesDataI }) {
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((value) =>(
              // Note key is unique identifier
              // 🌟 Why Not Use Index as a Key?
              // 1.	Order Change Issue:
              // •	If the list order changes (due to sorting or filtering), React may misidentify elements, causing incorrect re-renders.
              // 2.	Insertion/Deletion Issue:
              // •	If you add or remove items, the index changes, breaking the component state.
              // 3.	Stability:
              // •	React uses keys to determine which items have changed, been added, or removed. Stable keys are crucial for accurate reconciliation.
              <tr data-testid="article" key={value?.date + value?.upvotes}>
                <td data-testid="article-title">{value?.title}</td>
                <td data-testid="article-upvotes"> {value?.upvotes}</td>
                <td data-testid="article-date">{value?.date}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ArticleSortChild;
