import { NextPage } from "next";
import DarkThemeToggleButton from "../components/DarkThemeToggleButton";
import ToggleButtonLenguage from "./ToggleButtonLenguage";

interface Props {}

const ToggleButtons: NextPage<Props> = ({}) => {
  return (
    <>
      
      <DarkThemeToggleButton />
      <ToggleButtonLenguage />

    </>
  );
};

export default ToggleButtons;
