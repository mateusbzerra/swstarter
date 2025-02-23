import { Outlet } from "react-router";
import { Header } from "../ui/Header";

export const MainLayout = () => {
  return (
    <div className="min-h-full md:h-full bg-background">
      <Header />
      <div className="w-full max-w-[1022px] mx-auto pt-[30px] pb-5">
        <Outlet />
      </div>
    </div>
  );
};
