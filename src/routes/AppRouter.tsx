import { Route, BrowserRouter, Routes } from "react-router";
import { routes } from '../utils/Utils';
import ErrorBoundary from "../components/ErrorBoundary";

const AppRouter = () => {
  return (
    <div className="daddy">
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};
export default AppRouter;