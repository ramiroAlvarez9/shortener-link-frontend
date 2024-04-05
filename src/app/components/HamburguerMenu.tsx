import HamburguerMenuIcon from "./HamburguerMenuIcon";
import Image from "next/image";
import Logo from '../../assets/logo.png'

interface Props {
  openMenu: React.MouseEventHandler<HTMLDivElement> | any;
}

const HamburguerMenu = ({ openMenu }: Props) => {
  return (
    <>
      <div className="hamburgerMenu w-full h-10 flex justify-between items-center">
        
        <div className="button__container " onClick={ () => openMenu()}>
          <HamburguerMenuIcon />
        </div>

        <Image
          src   = {Logo}
          width = {30}
          height= {30}
          alt="Picture of the author"
          className="mr-8"
        />
      </div>
    </>
  );
};

export default HamburguerMenu;
