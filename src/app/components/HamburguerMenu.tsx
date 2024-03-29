import HamburguerMenuIcon from "./HamburguerMenuIcon";

interface Props {
  openMenu: void;
}

const hamburguerMenu = ({ openMenu }: Props) => {
  return (
    <>
      <div className="hamburgerMenu w-full h-10 flex justify-start items-center ">
        <div
          className="button__container border border-solid border-orange-400 "
          onClick={ () => openMenu() }
        >
          <HamburguerMenuIcon />
          
        </div>
      </div>
    </>
  );
};

export default hamburguerMenu;
