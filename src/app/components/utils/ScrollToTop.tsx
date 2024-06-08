"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth", left: 0 });
  };
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    scrollY > 10 && (
      <button
        className="fixed bottom-4 right-4 bg-primary-container text-primary-on-container p-2 rounded-full shadow-lg z-[999]"
        onClick={handleScroll}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    )
  );
}
