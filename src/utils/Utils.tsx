import { JSX } from "react";
import ToDoList from '../components/ToDoList';
import CounterExample from "../components/CounterExample";
import ShowHideDiv from "../components/ShowHideDiv";
import Home from "../components/Home";
import LazyLoadSuspense from "../components/LazyLoadSuspense";
import GoBackToHome from "../components/GoBacktoHome";
import FetchLazyLoadImages from "../components/FetchApiImages";
import IntersectionObserver from "../components/IntersectionObserver";

interface RouteType {
  path: string;
  element: JSX.Element;
  hideOnHome?: boolean;
  linkText: string;
}

export const routes: RouteType[] = [
  {path:"/IntersectionObserver", element: <IntersectionObserver />, linkText: "Intersection Observer"},
  {path:"/FetchApiImages", element: <FetchLazyLoadImages />, linkText: "Fetch API"},
  {path: "/LazyLoadSuspense", element: <LazyLoadSuspense />, linkText: "Lazy Load Suspense"},
  {path: "/ToDoList", element: <ToDoList />, linkText: "To Do List"},
  {path:"/counter-example" , element: <CounterExample />, linkText: "Counter"},
  {path: "/ShowHideDiv", element: <ShowHideDiv />, linkText: "Show/hide content"},
  {path: "*", element: <h1>404 <GoBackToHome /></h1>, linkText: "Catch Route (404)"},
  {path: "/", element: <Home />, hideOnHome: true, linkText: "Home"},
]