import { Route, BrowserRouter, Routes } from "react-router";

import Home from '../components/Home';
import ShowHideDiv from '../components/1-ShowHideDiv';
import { JSX } from "react";
import CounterExample from "../components/CounterExample";

interface RouteType {
  path: string;
  element: JSX.Element;
  hideOnHome?: boolean;
  linkText: string;
}

export const routes: RouteType[] = [
  {path:"/counter-example" , element: <CounterExample />, linkText: "Counter"},
  {path: "/", element: <Home />, hideOnHome: true, linkText: "Home"},
  {path: "/ShowHideDiv", element: <ShowHideDiv />, linkText: "Show/hide content"}
]

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;