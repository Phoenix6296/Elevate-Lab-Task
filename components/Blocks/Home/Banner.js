"use client";
import { Cart, Profile } from "@/components/Icons";
import { SearchInput, Dropdown, Button } from "@/components/common";
import Image from "next/image";
import { useState } from "react";
import { LANGUAGE_OPTIONS } from "@/utils/constants";

const ActionButton = ({ title, icon }) => {
  return (
    <button className="p-2 rounded-md hover:shadow-lg flex items-center justify-center hover:bg-yellow">
      <div className="w-8 h-8 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white text-sm font-semibold">{title}</span>
    </button>
  );
};

export const Banner = ({
  category,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [language, setLanguage] = useState({
    id: 1,
    name: "English",
  });

  return (
    <div
      className="w-full h-[70dvh] px-20 relative"
      style={{
        backgroundImage: "url(/banner.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t h-full from-white to-transparent"></div>
      <div className="relative z-10 flex flex-col gap-10 py-10">
        <h1 className="text-4xl font-bold text-white text-center">Eflyer</h1>
        <section className="flex w-full items-center justify-evenly mb-10">
          <Image
            src="/common/hamburger_icon.svg"
            width={40}
            height={40}
            alt="Menu"
            className="cursor-pointer"
          />
          <Dropdown
            options={category}
            value={selectedCategory}
            setValue={setSelectedCategory}
            className={"bg-gray-800 text-white"}
            defaultValue={"All"}
          />
          <SearchInput
            value={searchTerm}
            setValue={setSearchTerm}
            placeholder={"Search"}
            containerStyles={"w-1/2"}
          />
          <Dropdown
            options={LANGUAGE_OPTIONS}
            identifier={"name"}
            value={language}
            setValue={setLanguage}
          />
          <div className="flex gap-2">
            <ActionButton title={"Cart"} icon={<Cart />} />
            <ActionButton title={"User"} icon={<Profile />} />
          </div>
        </section>
        <div className="flex flex-col text-6xl font-bold text-center text-white gap-5 drop-shadow-xl">
          <h1>GET START</h1>
          <h1>YOUR FAVOURITE SHOPPING</h1>
        </div>
        <Button
          title={"BUY NOW"}
          containerStyles={"mx-auto"}
          className={"w-40"}
        />
      </div>
    </div>
  );
};
