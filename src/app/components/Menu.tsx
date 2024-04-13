"use client";
import { Sidebar } from "flowbite-react";
import { HiHome, HiLink, HiQrcode } from "react-icons/hi";
import { useState } from "react";
import HamburguerMenu from "./HamburguerMenu";
import HeaderMenu from "./HeaderMenu";
import ToggleButtons from "./ToggleButtons";

export default function Menu() {
  const [positionOfMenu, setPositionOfMenu] = useState<number>(-100);
  const openMenu = () => setPositionOfMenu(0);
  const closeMenu = () => setPositionOfMenu(-100);

  return (
    <>
      {/* -------------------- Mobile ---------------------- */}

      <header className="lg:hidden ">
        <HamburguerMenu openMenu={openMenu} />
      </header>

      <nav className="w-full h-full">
        <Sidebar
          aria-label="Sidebar with multi-level"
          style={{ transform: `translate(${positionOfMenu}%)` }}
          className="navInMobile w-full h-screen fixed top-0 z-10 transition-transform lg:w-1/5 lg:hidden"
        >
          <HeaderMenu closeMenu={closeMenu} />

          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="border-solid border border-gray-200 bg-gray-200 w-full"></div>

              <Sidebar.Item href="/" icon={HiHome}>
                Home
              </Sidebar.Item>

              <Sidebar.Item
                href="/links"
                icon={HiLink}
                labelColor="dark"
                label="0"
              >
                Links
              </Sidebar.Item>

              <Sidebar.Item href="/" icon={HiQrcode}>
                QR Codes
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {/* -------------------- Desktop ---------------------- */}

        <Sidebar
          aria-label="Sidebar with multi-level"
          className="navInDesktop w-full h-full fixed top-0 z-10 transition-transform lg:w-1/5 xlmax:hidden"
        >
          <HeaderMenu closeMenu={closeMenu} />

          <Sidebar.Items className="h-1/2 ">
            <Sidebar.ItemGroup>
              <div className="border-solid border border-gray-200 bg-gray-200 w-full"></div>

              <Sidebar.Item href="/" icon={HiHome}>
                Home
              </Sidebar.Item>

              <Sidebar.Item
                href="/links"
                icon={HiLink}
                labelColor="dark"
                label="0"
              >
                Links
              </Sidebar.Item>

              <Sidebar.Item href="/" icon={HiQrcode}>
                QR Codes
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
          

          <div className="toggleButtons__container mt-72 flex justify-between items-center flex-row ">
          <div className=" border border-solid border-gray-200 bg-gray-200 w-full"></div>
            <ToggleButtons />
          </div>
        </Sidebar>
      </nav>
    </>
  );
}
