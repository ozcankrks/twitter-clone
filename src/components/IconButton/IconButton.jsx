import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const IconButton = ({ icon, count }) => {
  return (
    <button
      className={`w-8 h-8 rounded-full hover:bg-blue-400/50 transition-colors ${
        count && "flex flex-row hover:bg-white"
      }  `}
    >
      <FontAwesomeIcon icon={icon} className="text-blue-500" />
      {count && (
        <span className="text-xs ml-1 text-zinc-700 font-semibold">229</span>
      )}
    </button>
  );
};
