import CloseIcon from "./CloseIcon";
import { Button } from "flowbite-react";

interface Props {
  closeMenu: void;
}

const HeaderMenu = ({ closeMenu }: Props) => {
  return (
    <>
      <div className="headerMenu w-full h-24 mb-10 ">
        <div onClick={() => closeMenu() } className="ml-2">
          <CloseIcon />
        </div>
        <div className="mt-10 "> 
          <Button color="blue" className="w-full" href = '/createlink'>
            Create new link
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
