import CloseIcon from "./CloseIcon";
import { Button } from "flowbite-react";
import Image from "next/image";
import Logo from '../../assets/logo.png'

interface Props {
  closeMenu: React.MouseEventHandler<HTMLDivElement> | any ;
}

const HeaderMenu = ({ closeMenu }: Props) => {
  return (
    <>
      <div className="headerMenu w-full h-24 mb-10 ">

        <div onClick={ () => closeMenu() } className="hamburguerButton ml-2 flex flex-row justify-between ">
          <CloseIcon />
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="Picture of the author"
            className=" "
          />
        
        </div>

        <div className="mt-10 ">
          <Button color="blue" className="w-full" href="/createlink">
            Create new link
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
