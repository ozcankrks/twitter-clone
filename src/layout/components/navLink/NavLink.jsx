import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export const CustomNavLink = ({
    icon,title
}) => {
  return (
    <NavLink
      className={
        "flex flex-row bg-white hover:bg-slate-200 transition-all px-6 py-2 rounded-full items-center mb-2"
      }
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <span className=" ml-2 font-semibold text-lg">{title}</span>
    </NavLink>
  );
};
