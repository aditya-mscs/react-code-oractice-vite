import { Route, BrowserRouter, Routes } from "react-router";
import { routes } from '../utils/Utils';
import ErrorBoundary from "../components/ErrorBoundary";
import { Profiler } from "react";

// Callback Function
  const onRender = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
  console.log(`------- Profiling ${id} - ${phase} -------`);
  console.log(`Actual duration: ${actualDuration} ms. Base duration: ${baseDuration} ms. Start time: ${startTime} ms. Commit time: ${commitTime} ms`);
};

const AppRouter = () => {
  return (
    <div className="daddy">
      <Profiler id="MyComponent" onRender={onRender}>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </Profiler>
    </div>
  );
};

export default AppRouter;