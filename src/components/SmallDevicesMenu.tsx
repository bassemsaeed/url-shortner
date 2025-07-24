"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SmallDevicesMenu = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  useEffect(() => {
    const handlResize = () => {
      const val = window.matchMedia("(width > 766px)").matches;
      if (val) setShowNavMenu(false);
    };

    window.addEventListener("resize", handlResize);

    return () => {
      window.removeEventListener("resize", handlResize);
    };
  }, []);
  return (
    <div className="relative lg:hidden md:hidden  block cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => setShowNavMenu(!showNavMenu)}
        className="size-6 lg:hidden md:hidden  block cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>

      <div
        className={
          "fixed shadow-lg bg-gray-100 z-50 w-[220px] right-5 mt-4 rounded-lg overflow-hidden transition-all duration-150 lg:hidden md:hidden block " +
          (showNavMenu
            ? "opacity-100 translate-y-0 pointer-events-auto h-auto"
            : "opacity-0 -translate-y-3 pointer-events-none h-auto")
        }
      >
        <Button
          btnName="Sign Up"
          href="/signup"
          style="bg-blue-600 hover:bg-blue-700 text-white"
        />
        <Button btnName="Sign In" href="/signin" style="hover:bg-gray-50" />
        <Button
          btnName="Analytics"
          href="/analytics"
          style="hover:bg-gray-50"
        />
        <Button btnName="My URLS" href="/myurls" style="hover:bg-gray-50" />
      </div>
    </div>
  );
};

function Button({
  btnName,
  href,
  style,
}: {
  btnName: string;
  href: string;
  style: string;
}) {
  return (
    <Link href={href}>
      <button
        className={
          "cursor-pointer w-full text-start py-3 px-4 transition-all duration-150 font-semibold " +
          style
        }
      >
        {btnName}
      </button>
    </Link>
  );
}
export default SmallDevicesMenu;
