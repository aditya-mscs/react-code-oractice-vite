import { Route, BrowserRouter, Routes } from "react-router";
import { routes } from '../utils/Utils';
import ErrorBoundary from "../react-next-concepts/ErrorBoundary";
import { Profiler } from "react";
import { GlobalProvider } from "../hooks/useGlobalContext";
import { A, B } from "../components/BrwoserRouterExample";

// Callback Function
const onRender = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  // actualDuration: number,
  // baseDuration: number,
  // startTime: number,
  // commitTime: number
) => {
  console.log(`------- Profiling ${id} - ${phase} -------`);
  // console.log(`Actual duration: ${actualDuration} ms. Base duration: ${baseDuration} ms. Start time: ${startTime} ms. Commit time: ${commitTime} ms`);
};

const AppRouter = () => {
  return (
    <GlobalProvider>
      <div className="daddy">
        <Profiler id="MyComponent" onRender={onRender}>
          <BrowserRouter>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}

              <Route path="/route-A" element={<A />}></Route>
              <Route path="/route-B/:id/:feature" element={<B />}></Route>
            </Routes>
          </BrowserRouter>
        </Profiler>
      </div>
    </GlobalProvider>
  );
};

export default AppRouter;