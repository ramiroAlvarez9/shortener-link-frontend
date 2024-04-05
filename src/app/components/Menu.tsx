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
import { useState, useEffect } from "react";
import HamburguerMenu from "./HamburguerMenu";
import HeaderMenu from "./HeaderMenu";

export default function Menu() {
  const [positionOfMenu, setPositionOfMenu] = useState<number>(-100);
  const [isMinorTo1200, setIsMinorTo1200]   = useState<boolean>(false)
  const openMenu = () => setPositionOfMenu(0);
  const closeMenu = () => setPositionOfMenu(-100);

  useEffect(() => {
    window.innerWidth < 1200 ? setIsMinorTo1200(true) :  setIsMinorTo1200(false); 
  }, []);

  return (
    <>
      <header className="lg:hidden ">
        <HamburguerMenu openMenu={openMenu} />
      </header>
      
      <nav className = "w-full h-full">
    
    
        {isMinorTo1200 ? 
          <>
        <Sidebar
          aria-label="Sidebar with multi-level"
          style={{ transform: `translate(${positionOfMenu}%)` }}
          className="navInMobile w-full h-screen fixed top-0 z-10 transition-transform lg:w-1/5 "
        >
          <HeaderMenu closeMenu={closeMenu} />

          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="border-solid border border-gray-200 bg-gray-200 w-full">
                
              </div>

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
        </>
        : 
        <>
        <Sidebar
          aria-label="Sidebar with multi-level"
          className="navInDesktop w-full h-screen fixed top-0 z-10 transition-transform lg:w-1/5 "
        >
        <HeaderMenu closeMenu={closeMenu} />
                 
                           <Sidebar.Items>
                             <Sidebar.ItemGroup>
                               <div className="border-solid border border-gray-200 bg-gray-200 w-full">
                                
                               </div>
                 
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
                         </>      
        
        }

      
      
        
      </nav>
      
      </>
  );
}
