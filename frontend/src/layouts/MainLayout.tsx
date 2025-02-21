import { Outlet } from "react-router";
import { Header } from "../ui/Header";

export const MainLayout = () => {
  return (
    <div className="h-full bg-background">
      <Header />
      <div className="w-full max-w-[1022px] mx-auto pt-[30px]">
        <Outlet />
      </div>
    </div>
  );
};
