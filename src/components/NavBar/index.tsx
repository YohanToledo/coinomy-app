import "./NavBar.scss";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePlusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiCalculator2 } from 'react-icons/ci';

const NavBar = () => {

  const [selected, setSelected] = useState({
    home: true,
    new: false,
    options: false,
  });

  const select = (page: "home" | "new" | "options") => {
    const allDisabled = { home: false, new: false, options: false };

    setSelected({ ...allDisabled, [page]: true });
  };


  const basePath = "/app";

  return (
    <>
      <div className="icon-calc">
        <CiCalculator2 className="calc" />
      </div>
      <div className="nav-container">

        <Link to={`${basePath}/home`}>
          <div
            className="home"
            onClick={() => {
              select("home");
            }}
          >
            {selected.home ? <AiFillHome /> : <AiOutlineHome />}
          </div>
        </Link>
        <Link to={`${basePath}/new`}>
          <div
            className="new"
            onClick={() => {
              select("new");
            }}
          >
            {selected.new ? <AiFillPlusCircle /> : <AiOutlinePlusCircle />}
          </div>
        </Link>
        <Link to={`${basePath}/options`}>
          <div
            className="options"
            onClick={() => {
              select("options");
            }}
          >
            {selected.options ? (
              <HiDotsCircleHorizontal />
            ) : (
              <TbDotsCircleHorizontal />
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
