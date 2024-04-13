"use client";
import ToggleButtons from "./ToggleButtons";
import HamburguerMenuIcon from "./HamburguerMenuIcon";
import Image from "next/image";
import Logo from "../../assets/logo.png";

interface Props {
  openMenu: React.MouseEvent<HTMLDivElement> | any;
}

const HamburguerMenu = ({ openMenu }: Props) => {
  return (
    <>
      <div className="hamburgerMenu w-full h-16 flex justify-between items-center">
        <div className="button__container " onClick={() => openMenu()}>
          <HamburguerMenuIcon />
        </div>

        <div className="logo__container flex flex-row items-center justify-center  w-1/5 mr-8">
          
          <ToggleButtons />

          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Picture of the author"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default HamburguerMenu;
