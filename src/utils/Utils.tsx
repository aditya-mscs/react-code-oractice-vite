import { JSX } from "react";
import ToDoList from '../components/ToDoList';
import CounterExample from "../components/CounterExample";
import ShowHideDiv from "../components/ShowHideDiv";
import Home from "../components/Home";

interface RouteType {
  path: string;
  element: JSX.Element;
  hideOnHome?: boolean;
  linkText: string;
}

export const routes: RouteType[] = [
  {path: "/ToDoList", element: <ToDoList />, linkText: "To Do List"},
  {path:"/counter-example" , element: <CounterExample />, linkText: "Counter"},
  {path: "/ShowHideDiv", element: <ShowHideDiv />, linkText: "Show/hide content"},
  {path: "/", element: <Home />, hideOnHome: true, linkText: "Home"},
]