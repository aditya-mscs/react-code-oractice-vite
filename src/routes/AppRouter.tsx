import { Route, BrowserRouter, Routes } from "react-router";
import { routes } from '../utils/Utils';

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