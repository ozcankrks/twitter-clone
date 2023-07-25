import {
  faEllipsisH,
  faEllipsisV,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SubjectCard } from "../../../components/SubjectCard/SubjectCard";
import { ProfileCard } from "../../../components/ProfileCard/ProfileCard";

export const RightBar = () => {
  return (
    <div
      className={`md:w-[380px] overflow-y-scroll p-5 shrink-0 md:bg-transparent bg-white md:flex fixed flex-col items-start md:relative md:mt-0 mt-14 z-50  h-screen space-y-5`}
    >
      <div className="w-full flex items-center relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute ml-3 text-zinc-500"
        />
        <input
          type="text"
          placeholder="Gündemden Ara"
          className="bg-[#eff3f4] w-full outline-none rounded-full pl-8 px-4 py-2"
        />
      </div>

      <div className="p-5 bg-[#f7f9f9] w-full rounded-lg">
        <h2 className="font-bold text-lg">Onaylanmış Hesap Sahibi Ol</h2>
        <h2 className="font-semibold text-base">
          Yeni özelliklerden yararlanmak için abone ol.
        </h2>
        <button className="bg-black text-white p-2 px-4 rounded-full mt-2 font-semibold ">
          Onaylanmış Hesap Sahibi Ol
        </button>
      </div>

      <div className=" bg-[#f7f9f9] w-full rounded-lg">
        <div className="p-5">
          <h2 className="font-bold text-lg">İlgini çekebilecek gündemler</h2>
          <h2 className="font-semibold text-base">
            Yeni özelliklerden yararlanmak için abone ol.
          </h2>
        </div>
        <SubjectCard
          subject="Gündemdekiler"
          title="Tuta"
          count="23M Tweet"
        />
        <SubjectCard
          subject="Gündemdekiler"
          title="Putin ve Rusya"
          count="233M Tweet"
        />
        <SubjectCard
          subject="Gündemdekiler"
          title="Twitter Artık Paralı mı? Erdoğan Sayesinde"
          count="993M Tweet"
        />
      </div>

      <div className="p-5 bg-[#f7f9f9] w-full rounded-lg">
        <h2 className="font-bold text-lg">Kimi takip etmeli</h2>

        <ProfileCard
          img={
            "https://pbs.twimg.com/profile_images/1614181596260614150/LhO4YM9P_400x400.jpg"
          }
          nickname={"@Usagidoodles"}
          name={"Usagi"}
        />
        <ProfileCard
          img={
            "https://pbs.twimg.com/profile_images/1683407474836008960/jeefb7F9_400x400.jpg"
          }
          nickname={"@isAdamıBora"}
          name={"İş Adamı Bora"}
        />
        <ProfileCard
          img={
            "https://pbs.twimg.com/profile_images/1653157500986744832/wu0ArmY8_400x400.jpg"
          }
          nickname={"@rte"}
          name={"rteZamYapma"}
        />
        <ProfileCard
          img={
            "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg"
          }
          nickname={"@MrBeast"}
          name={"MrBeast"}
        />
      
      </div>
    </div>
  );
};
