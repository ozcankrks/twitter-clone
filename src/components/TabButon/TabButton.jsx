import React from "react";

export const TabButton = ({ title, onPress, isActive }) => {
  return (
    <div className="flex flex-col items-center relative ">
      <button
        onClick={() => {
          onPress();
        }}
        className="font-semibold"
      >
        {title}
      </button>
      {isActive && (
        <div className="w-8 h-1 bg-blue-500 rounded-full absolute -bottom-2" />
      )}
    </div>
  );
};
