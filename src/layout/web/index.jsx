import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { RightBar } from "../components/rightBar/RightBar";

export const WebLayout = () => {
  return (
    <>
      {/* {loader && (
        <div className="bg-white bg-opacity-95  w-screen h-screen  z-50 overflow-hidden  flex justify-center items-center fixed  flex-col">
          <img src={load} alt="loading..." className="w-[150px] h-[150px]" />
          <span>Yükleniyor</span>
        </div>
      )} */}

      {/* <Header /> */}
      <div className="w-full flex-col md:flex-row max-w-[1180px] m-auto flex shrink-0 h-screen">
        <Sidebar />
        <main className="flex flex-1 w-full shrink-0 md:px-5 px-2 md:mt-0 mt-14 h-screen overflow-y-scroll">
          <Outlet />
        </main>
        <RightBar />
      </div>
    </>
  );
};


