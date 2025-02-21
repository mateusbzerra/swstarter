import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { MainLayout } from "./layouts/MainLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
