import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateBack,
  faChartColumn,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { IconButton } from "../IconButton/IconButton";

export const PostCard = ({ item }) => {
  return (
    <div className="flex flex-row p-5">
      <img src={item.author_img} className="w-10 h-10 rounded-full" alt="" />
      <div className="flex flex-col ml-2">
        <span className="font-bold text-sm">
          {item.author_name}{" "}
          <span className="font-semibold text-zinc-900">
            {item.author_nick}
          </span>
        </span>
        <p>{item.post_text}</p>

        {item.attcType == "image" && (
          <img
            src="https://pbs.twimg.com/media/F10AlFzXsAAd0JO?format=jpg&name=medium"
            alt=""
            className="w-full h-[280px] object-cover rounded-sm"
          />
        )}
        {item.attcType == "video" && (
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            className="w-full h-[280px] object-cover rounded-sm" controls
          ></video>
        )}
        <div className="flex flex-row justify-between mt-5 w-full">
          <IconButton icon={faComment} count={23} />
          <IconButton icon={faArrowRotateBack} count={3123} />
          <IconButton icon={faHeart} count={432} />
          <IconButton icon={faChartColumn} count={321} />
          <IconButton icon={faShare} count={31} />
        </div>
      </div>
    </div>
  );
};
