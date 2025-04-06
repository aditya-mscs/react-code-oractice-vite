import { JSX } from "react";
import ToDoList from '../components/ToDoList';
import CounterExample from "../components/CounterExample";
import ShowHideDiv from "../components/ShowHideDiv";
import Home from "../components/Home";
import LazyLoadSuspense from "../components/LazyLoadSuspense";
import GoBackToHome from "../components/GoBacktoHome";
import FetchLazyLoadImages from "../components/FetchApiImages";
import IntersectionObserver from "../components/IntersectionObserver";
import { ArticleSort } from "../components/ArticleSort";
import { WordOmitter } from "../components/WordOmitter";
import { ES6 } from "../components/ES6";
import Cart from "../components/Cart";
import UsePreviousHook from "../components/usePreviousHook";
import { ConnectFour } from "../components/ConnectFour";
import ImageCarousel from "../components/ImageCarousel";
import { TicTacToe } from "../components/TicTacToe";
import { VirtualizedListWrapper } from "../components/VirtualizedList";

interface RouteType {
  path: string;
  element: JSX.Element;
  hideOnHome?: boolean;
  linkText: string;
}

type ArticleData = {
  title: string;
  upvotes: number;
  date: string;
}
export type ArticlesDataI = ArticleData[];

export const ARTICLES_DATA: ArticlesDataI= [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2025-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2024-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2021-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "1985-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
]

export const routes: RouteType[] = [
  {path: "/VirtualizedListWrapper", element: <VirtualizedListWrapper />, linkText: "Virtualized List"},
  {path: "/TicTackToe", element: <TicTacToe />, linkText: "Tic Tac Toe"},
  {path:"ImageCarousel", element: <ImageCarousel />, linkText: "Image Carousel"},
  {path: "/ConnectFour", element: <ConnectFour />, linkText: "Connect Four"},
  {path: "/usePreviousHook", element: <UsePreviousHook />, linkText: "usePrevious Hook"},
  {path: "/cart", element: <Cart />, linkText: "Cart"},
  {path: "/es6-features", element: <ES6 />, linkText: "ES6 Features"},
  {path: "/WordOmitter", element: <WordOmitter />, linkText: "Word Omitter"},
  {path:"/ArticleSort", element: <ArticleSort articlesData={ARTICLES_DATA} />, linkText: "Article Sort"},
  {path:"/IntersectionObserver", element: <IntersectionObserver />, linkText: "Intersection Observer"},
  {path:"/FetchApiImages", element: <FetchLazyLoadImages />, linkText: "Fetch API"},
  {path: "/LazyLoadSuspense", element: <LazyLoadSuspense />, linkText: "Lazy Load Suspense"},
  {path: "/ToDoList", element: <ToDoList />, linkText: "To Do List"},
  {path:"/counter-example" , element: <CounterExample />, linkText: "Counter"},
  {path: "/ShowHideDiv", element: <ShowHideDiv />, linkText: "Show/hide content"},
  {path: "*", element: <h1>404 <GoBackToHome /></h1>, linkText: "Catch Route (404)"},
  {path: "/", element: <Home />, hideOnHome: true, linkText: "Home"},
]
