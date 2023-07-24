import React from "react";

export const ProfileCard = ({ img, nickname, name }) => {
  return (
    <div className="flex flex-row items-center mb-2">
      <img
        src={img}
        className="w-10 h-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col px-2  flex-1">
        <h2 className="text-base">{name}</h2>
        <span className="text-sm text-zinc-600">{nickname}</span>
      </div>
      <div>
        <button className="bg-black text-white py-1 px-4 rounded-full hover:bg-gray-700 transition-all">
          Takip Et
        </button>
      </div>
    </div>
  );
};
