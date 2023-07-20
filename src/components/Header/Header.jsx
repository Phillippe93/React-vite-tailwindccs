/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { useEffect } from "react";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4">
      <div className="flex justify-between pt-2">
        <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">
          TODO
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <SunIcon></SunIcon>
          ) : (
            <MoonIcon className="fill-red-500"></MoonIcon>
          )}
        </button>
      </div>
    </header>
  );
};
