import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SubjectCard = ({ subject, title, count }) => {
  return (
    <div className="flex flex-row items-center hover:bg-[#eff1f1] p-4 bg-[#f7f9f9]">
      <div className="w-full flex flex-col">
        <span className="text-xs">{subject}</span>
        <span className="font-semibold">{title}</span>
        <span className="text-xs">{count}</span>
      </div>
      <FontAwesomeIcon icon={faEllipsisH} />
    </div>
  );
};
