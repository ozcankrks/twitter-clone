import React, { useState } from "react";
import { TabButton } from "../../components/TabButon/TabButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRotateBack,
  faChartColumn,
  faEarth,
  faGift,
  faList,
  faLocation,
  faLocationArrow,
  faLocationPin,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendar,
  faComment,
  faHeart,
  faImage,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { IconButton } from "../../components/IconButton/IconButton";
import { PostCard } from "../../components/PostCard/PostCard";
import { POSTS } from "../../../dummyData";

export const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="pt-3 w-full border border-[#eff3f4]">
      <div>
        <h1 className="font-bold text-xl ">Anasayfa</h1>
      </div>

      <div className="flex flex-row items-center justify-around w-full p-5 space-x-4">
        <TabButton
          title="Sana Özel"
          isActive={activeTab == 0}
          onPress={() => {
            setActiveTab(0);
          }}
        />
        <TabButton
          title="Takip Edilenler"
          isActive={activeTab == 1}
          onPress={() => {
            setActiveTab(1);
          }}
        />
      </div>
      <div className=" border border-[#eff3f4] w-full flex flex-col p-5">
        <div className="flex flex-row">
          <img
            src="https://pbs.twimg.com/profile_images/741610857591902208/LeFxfqia_400x400.jpg"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="w-full flex-row">
            <div className="flex flex-row">
              <div className="space-x-[1px] text-blue-500 items-center flex px-1 ml-3 border border-blue-500 rounded-full">
                <FontAwesomeIcon icon={faEarth} size="xs" />
                <span className="font-semibold text-sm">Herkes</span>
                <FontAwesomeIcon icon={faAngleDown} size="xs" />
              </div>
            </div>
            <textarea
              name=""
              id=""
              cols="50"
              rows="6"
              className="flex flex-1 w-full outline-none pl-5 text-lg"
              placeholder="Neler Oluyor Hayatta!"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2 items-center">
          <div>
            <IconButton icon={faImage} />
            <IconButton icon={faGift} />
            <IconButton icon={faList} />
            <IconButton icon={faSmile} />
            <IconButton icon={faCalendar} />
            <IconButton icon={faLocationPin} />
          </div>
          <button className="text-lg text-white bg-blue-500 text-center px-4 rounded-full">
            Tutala
          </button>
        </div>
      </div>
      {activeTab == 0 && (
        <div className="border-b border-[#eff3f4]">
          {POSTS.map((item) => (
            <PostCard item={item}/>
          ))}
        </div>
      )}
      {activeTab == 1 && <div>Takip Edilenler</div>}
    </div>
  );
};
