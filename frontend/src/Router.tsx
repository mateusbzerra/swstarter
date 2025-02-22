import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home/Home";
import { MainLayout } from "./layouts/MainLayout";
import { People } from "./pages/People/People";
import { Films } from "./pages/Films/Films";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/films/:id" element={<Films />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
