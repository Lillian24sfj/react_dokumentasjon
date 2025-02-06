import { useState, useEffect } from "react";
export const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
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
      <div className="flex justify-end mb-4">
        <button
          className="px-4 py-2 rounded-lg shadow-md bg-gray-800 text-white dark:bg-gray-300 dark:text-black"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Lysmodus" : "Mørkmodus"}
        </button>
      </div>
    );
  };
  