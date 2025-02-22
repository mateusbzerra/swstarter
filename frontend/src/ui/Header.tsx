import { LightDarkThemeSwitch } from "@/components/LightDarkThemeSwitch";

export const Header = () => {
  return (
    <header className="w-full bg-foreground h-[50px] flex items-center justify-center shadow-md shadow-dark-grey">
      <div className="flex w-full items-center justify-center max-w-5xl relative">
        <span className="font-bold text-lg text-primary">SWStarter</span>
        <LightDarkThemeSwitch />
      </div>
    </header>
  );
};
