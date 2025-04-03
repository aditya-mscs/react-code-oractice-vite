
import {useCallback, useEffect, useState} from "react";
import {ArticlesDataI} from "../utils/Utils";
import ArticleSortChild from "./ArticleSortChild";
import GoBackToHome from "./GoBacktoHome";

export const ArticleSort = ({articlesData}: { articlesData: ArticlesDataI }) => { //Note declaration of properties
  const [sortOrderDate, setSortOrderDate] = useState("");
  const [sortOrderUpvotes, setSortOrderUpvotes] = useState("");
  const [articles, setArticles] = useState<ArticlesDataI>(articlesData);




  //Not a good approach as two inter-dependent states are being used
  const sortByDate = useCallback(() => {
    console.log(sortOrderDate);

    const sortedArticles = [...articlesData].sort((a, b) => {
      return sortOrderDate === "" || sortOrderDate === "desc"
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    setArticles(sortedArticles);
    setSortOrderDate(sortOrderDate === "" || sortOrderDate === "asc" ? "desc" : "asc");
    console.log(sortOrderDate); //First render, this will be empty even though above line
    setSortOrderUpvotes("");
  }, [articlesData, sortOrderDate]);






  //Correct approach
  // ✅ useCallback to memoize the sorting function by upvotes
  const sortByUpvotes = useCallback(() => {
    setSortOrderUpvotes((prev) => (prev === "" ? "asc" : prev === "asc" ? "desc" : "asc")); //See how dependency sortOrderUpvotes is not used here
    // setSortOrderUpvotes(sortOrderUpvotes === ""? "asc": sortOrderUpvotes === "asc"? "desc": "asc");
  }, []);
  
  useEffect(() => {
    //Below 6 lines can be moved to useMemo as shown in commented code
    if (!sortOrderUpvotes) return; // If sortOrderUpvotes is empty, do not sort. This is to prevent sorting on initial render.

    const sortedArticles = [...articlesData].sort((a, b) => { //Use articlesData as its always original data and dependecy not on articles
      return sortOrderUpvotes === "asc" //ASC -> a-b, DESC -> b-a
       ? a.upvotes - b.upvotes
        : b.upvotes - a.upvotes;
    });

    setArticles(sortedArticles);
    setSortOrderDate("");
  }, [articlesData, sortOrderUpvotes]);


  // ✅ useMemo to memoize the sorted articles based on upvotes
  // const sortedArticles = useMemo(() => {
  //   if (!sortOrderUpvotes) return articlesData;

  //   return [...articlesData].sort((a, b) => {
  //     return sortOrderUpvotes === "asc" ? a.upvotes - b.upvotes : b.upvotes - a.upvotes;
  //   });
  // }, [articlesData, sortOrderUpvotes]);

  // // ✅ useEffect to update articles when sorting changes
  // useEffect(() => {
  //   setArticles(sortedArticles);
  //   setSortOrderDate(""); // Reset date sorting when sorting by upvotes
  // }, [sortedArticles]);


  return (
    <div>
      <GoBackToHome />Word Omitter

      <h1>Sort Articles</h1>
      <button type="button" onClick={sortByDate}>
        Sort by Date ({sortOrderDate || "N/A"})
      </button>
      <button type="button" onClick = {sortByUpvotes}>
        Sort by Votes ({sortOrderUpvotes || "N/A"})
      </button>
      <ArticleSortChild articles={articles} />
    </div>
  );
}