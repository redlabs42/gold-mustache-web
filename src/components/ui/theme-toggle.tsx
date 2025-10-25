"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div className="relative h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <Sun className="h-4 w-4 text-yellow-500" />
          <Moon className="h-4 w-4 text-gray-400" />
        </div>
        <span className="sr-only">Toggle theme</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-8 w-14 rounded-full bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 dark:bg-gray-800"
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
    >
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun
          className={`h-4 w-4 transition-colors duration-300 ${
            isDark ? "text-gray-400" : "text-yellow-500"
          }`}
        />
        <Moon
          className={`h-4 w-4 transition-colors duration-300 ${
            isDark ? "text-blue-400" : "text-gray-400"
          }`}
        />
      </div>
      <motion.div
        className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md"
        initial={false}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
