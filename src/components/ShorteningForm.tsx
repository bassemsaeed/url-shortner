"use client";

import React, { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";

const ShorteningForm = () => {
  const [urlToShorten, setUrlToShorten] = useState("");

  return (
    <div className="mt-10 w-full max-w-2xl">
      <div className="relative flex flex-col sm:flex-row">
        <div className="relative w-full">
          {/* This icon is a nice visual touch */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <LinkIcon className="h-6 w-6 text-gray-400" />
          </div>
          <input
            type="url"
            placeholder="Paste a long URL here..."
            required
            value={urlToShorten}
            onChange={(e) => {
              setUrlToShorten(e.target.value);
            }}
            className="w-full text-lg pl-12 pr-4 py-4 rounded-full shadow-lg border-2 border-transparent 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           transition-all"
          />
        </div>
        {/* The button is positioned absolutely within the relative parent */}
        <button
          type="submit"
          className="mt-3 sm:absolute sm:inset-y-0 sm:right-0 flex items-center 
                         bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-full
                         sm:m-1.5 hover:bg-blue-700 focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-md
                         hover:scale-105 cursor-pointer select-none"
        >
          Zip it!
        </button>
      </div>

      {/** URL RESULTS */}
{/* 
      <div className="w-full h-fit p-2 border">

      </div> */}
    </div>
  );
};

export default ShorteningForm;
