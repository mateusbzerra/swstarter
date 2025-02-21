import { Outlet } from "react-router";
import { Header } from "../ui/Header";

export const MainLayout = () => {
  return (
    <div className="h-full bg-background">
      <Header />
      <Outlet />
    </div>
  );
};
