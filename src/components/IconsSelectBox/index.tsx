import { BsFillCartFill, BsFillHouseDoorFill } from "react-icons/bs";
import { RiGasStationFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import {
  AiFillCloud,
  AiFillCar,
  AiFillCreditCard,
  AiFillGift,
  AiFillMedicineBox,
  AiFillShop,
  AiFillSkin,
  AiOutlineBank,
} from "react-icons/ai";
import "./IconsSelectBox.scss";
import { useState } from "react";

const ICONS = [
  "MdOutlineAttachMoney",
  "BsFillCartFill",
  "BsFillHouseDoorFill",
  "RiGasStationFill",
  "AiFillCloud",
  "AiFillCar",
  "AiFillCreditCard",
  "AiFillGift",
  "AiFillMedicineBox",
  "AiFillShop",
  "AiFillSkin",
  "AiOutlineBank",
];

const Icons: any = {
  MdOutlineAttachMoney: <MdOutlineAttachMoney />,
  BsFillCartFill: <BsFillCartFill />,
  BsFillHouseDoorFill: <BsFillHouseDoorFill />,
  RiGasStationFill: <RiGasStationFill />,
  AiFillCloud: <AiFillCloud />,
  AiFillCar: <AiFillCar />,
  AiFillCreditCard: <AiFillCreditCard />,
  AiFillGift: <AiFillGift />,
  AiFillMedicineBox: <AiFillMedicineBox />,
  AiFillShop: <AiFillShop />,
  AiFillSkin: <AiFillSkin />,
  AiOutlineBank: <AiOutlineBank />,
};

type Props = {
  setIconSelected: (icon: string) => void;
};

const IconsSelectBox = ({ setIconSelected }: Props) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="icons-grid-container">
      {ICONS.map((icon, index) => (
        <div
          key={index}
          className={`icons-grid-item ${
            selected === index && "icon-grid-item-selected"
          }`}
          onClick={() => {
            setIconSelected(icon);
            setSelected(index);
          }}
        >
          <div className="icon">{Icons[icon]}</div>
        </div>
      ))}
    </div>
  );
};

export default IconsSelectBox;
