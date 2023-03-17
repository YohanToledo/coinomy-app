import "./NavBar.scss";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { useState } from "react";
const NavBar = () => {
  const [isHome, setIsHome] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const [isOptions, setIsOptions] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div
          className="icon-1"
          onClick={() => {
            setIsHome(true);
            setIsNew(false);
            setIsOptions(false);
          }}
        >
          {isHome ? <AiFillHome /> : <AiOutlineHome />}
        </div>
        <div
          className="icon-2"
          onClick={() => {
            setIsHome(false);
            setIsNew(true);
            setIsOptions(false);
          }}
        >
          {isNew ? <AiFillPlusCircle /> : <AiOutlinePlusCircle />}
        </div>
        <div
          className="icon-3"
          onClick={() => {
            setIsHome(false);
            setIsNew(false);
            setIsOptions(true);
          }}
        >
          {isOptions ? <HiDotsCircleHorizontal /> : <TbDotsCircleHorizontal />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
