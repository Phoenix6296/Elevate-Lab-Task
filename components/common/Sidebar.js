"use client";
import { NAVBAR_LIST } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "../Icons";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full lg:hidden bg-transparent">
      <button
        className="absolute z-30 top-5 left-5"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>
      {open && (
        <div className="slide-in-left fixed top-0 w-full h-screen bg-white left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center justify-between px-5 my-5">
            <h1 className="text-xl font-bold">Eflyer</h1>
            <Image
              src="/common/close.svg"
              alt="Close"
              height={20}
              width={20}
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <nav className="flex flex-col px-5 justify-between h-[85%]">
            <ul className="flex flex-col gap-5">
              {NAVBAR_LIST.map((item) => (
                <li key={item} className="hover:text-yellow cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
