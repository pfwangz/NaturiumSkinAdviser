import React from "react";
import { Sun, X } from "lucide-react";
import naturiumLogo from "figma:asset/0de4e7d939c801856973b5afdce10426809fa9b9.png";
import Frame43 from "../imports/Frame43";

export function Header() {
  return (
    <div className="px-6 pt-[68px] pb-5 border-b border-gray-100 relative">
      <button
        className="absolute top-3 right-6 p-1.5 hover:bg-gray-100 rounded-[0px] transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-5 h-5 text-black" />
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div>
              <img
                src={naturiumLogo}
                alt="Naturium"
                className="h-5"
              />
              <p className="text-xs text-gray-500 text-[14px] mt-2">
                Skin Coach
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <Frame43 />
          </div>
          <div className="flex items-center gap-2 bg-[rgb(0,0,0)] rounded-[0px] px-3 py-2">
            <Sun className="w-4 h-4 text-white" />
            <div className="flex flex-col">
              <span className="text-xs text-white font-medium">78°F</span>
              <span className="text-[10px] text-white opacity-75">UV High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}