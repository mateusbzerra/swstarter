import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";
import { useEffect, useState } from "react";

const LOCALSTORAGE_THEME_KEY = "@swstarter/theme";

export const LightDarkThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((isCurrentDark) => {
      localStorage.setItem(
        LOCALSTORAGE_THEME_KEY,
        isCurrentDark ? "light" : "dark"
      );

      if (isCurrentDark) {
        document.querySelector("html")?.classList.remove("dark");
      } else {
        document.querySelector("html")?.classList.add("dark");
      }

      return !isCurrentDark;
    });
  };

  useEffect(() => {
    const themeStorage = localStorage.getItem(LOCALSTORAGE_THEME_KEY);
    if (themeStorage === "dark") {
      setIsDarkMode(true);
      document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="absolute right-3 md:right-0 flex flex-row justify-center ml-3 bg-background rounded-full w-8 h-8 items-center"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
