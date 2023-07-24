import {
  faBookBookmark,
  faEllipsisH,
  faHome,
  faList,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { CustomNavLink } from "../navLink/NavLink";
import {
  faBell,
  faCheckCircle,
  faCompass,
  faEnvelope,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
export const Sidebar = () => {
  return (
    <div
      className={`md:w-[240px] p-2 shrink-0 md:bg-transparent bg-white md:flex fixed flex-col items-start md:relative md:mt-0 mt-14 z-50 justify-between h-screen`}
    >
      <div className="w-full ">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
        <div className="mt-5">
          <CustomNavLink icon={faHome} title={"Anasayfa"} />
          <CustomNavLink icon={faCompass} title={"Keşfet"} />
          <CustomNavLink icon={faBell} title={"Bildirim"} />
          <CustomNavLink icon={faEnvelope} title={"Mesajlar"} />
          <CustomNavLink icon={faList} title={"Listeler"} />
          <CustomNavLink icon={faBookBookmark} title={"Yer İşaretleri"} />
          <CustomNavLink icon={faCheckCircle} title={"Onaylanmış"} />
          <CustomNavLink icon={faUser} title={"Profil"} />
          <CustomNavLink icon={faEllipsisH} title={"Daha Fazla"} />
        </div>
        <button className="bg-blue-500 block w-full text-white rounded-full font-semibold text-center py-2 hover:bg-blue-600">
          Tutala
        </button>
      </div>
      <div  className="flex flex-row items-center w-full py-2 bg-white rounded-full hover:bg-[#f7f9f9] px-2">
        <img
          src="https://pbs.twimg.com/profile_images/741610857591902208/LeFxfqia_400x400.jpg"
          className="w-10 h-10 rounded-full"
          alt=""
        />
        <div className="flex flex-col ml-2 justify-center flex-1 w-full">
          <span className="font-semibold">Ozcan Karakuş</span>
          <span className="font-medium text-xs text-gray-500">@ozcankrks1</span>
        </div>
        <FontAwesomeIcon icon={faEllipsisH} />
      </div>
    </div>
  );
};
