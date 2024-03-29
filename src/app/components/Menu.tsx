"use client";

import { Sidebar } from "flowbite-react";
import {
  HiHome,
  HiLink,
  HiQrcode,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import HeaderMenu from "./HeaderMenu";

export default function Menu() {
  const [positionOfMenu, setPositionOfMenu] = useState<number>(-100);

  const openMenu = (): void => setPositionOfMenu(0);
  const closeMenu = (): void => setPositionOfMenu(-100);

  return (
    <>
      <HamburguerMenu openMenu={openMenu} />

      <Sidebar
        aria-label="Sidebar with multi-level  "
        className="w-full h-screen"
        style={{
          transform: `translate(${positionOfMenu}%)`,
          transition: "transform 0.3s",
          position: "fixed",
          zIndex: 2,
          top: 0,
        }}
      >
        <HeaderMenu closeMenu={closeMenu} />

        <Sidebar.Items>
          <Sidebar.ItemGroup>
            
            <div className="border-solid border border-gray-400 w-full">
                
            </div>

            <Sidebar.Item href="#" icon={HiHome}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiLink} labelColor="dark" label="0">
              Links
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiQrcode}>
              QR Codes
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
