"use client";

import HamburguerMenuIcon from "./HamburguerMenuIcon";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useThemeMode } from "flowbite-react";

interface Props {
  openMenu: React.MouseEvent<HTMLDivElement> | any;
}

const HamburguerMenu = ({ openMenu }: Props) => {


  return (
    <>
      <div className="hamburgerMenu w-full h-10 flex justify-between items-center">
        <div className="button__container " onClick={() => openMenu()}>
          <HamburguerMenuIcon />
        </div>

        <div className="logo__container  ">
          
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="Picture of the author"
            className="mr-8"
          />
        </div>
      </div>
    </>
  );
};

export default HamburguerMenu;
