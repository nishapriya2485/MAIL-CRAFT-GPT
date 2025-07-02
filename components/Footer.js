"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [starCount, setStarCount] = useState(0);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/0xmetaschool/EmailGeneratorGPT"
        );
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <footer className="w-full border-t border-white/10 bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div>
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs text-white/70 mb-4">
              Free open source AI template
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Build your own Email Generator GPT
            </h3>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/0xmetaschool/EmailGeneratorGPT/fork"
                className="inline-flex items-center px-4 py-2 bg-white text-black rounded-md hover:shadow-lg hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm font-medium"
              >
                Fork and Build Your Own
              </Link>
              <div className="relative inline-flex items-center group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-white hover:text-black transition-colors text-xs">
                  <svg viewBox="0 0 16 16" width="16" height="16" className="fill-current">
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                  </svg>
                  Star
                </button>

                <div className="relative w-20 h-8">
                  <svg viewBox="0 0 80 32" className="w-full h-full">
                    <path
                      d="M 12 2
                          H 72
                          Q 78 2 78 8
                          V 24
                          Q 78 30 72 30
                          H 12
                          Q 6 30 6 24
                          V 20
                          L 0 16
                          L 6 12
                          V 8
                          Q 6 2 12 2"
                      fill="white"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      className="drop-shadow-sm"
                    />
                    <text
                      x="42"
                      y="16"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-sm"
                      fill="black"
                    >
                      {starCount}
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center text-white/70">
              <span>BUILT WITH</span>
              <span className="mx-2 text-white">💡</span>
              <span>BY</span>
              <span className="ml-2 text-white font-semibold">Nisha Priya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

