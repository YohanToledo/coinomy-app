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

const ICONS = [
  "BsFillCartFill",
  "BsFillHouseDoorFill",
  "RiGasStationFill",
  "MdOutlineAttachMoney",
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
  BsFillCartFill: <BsFillCartFill />,
  BsFillHouseDoorFill: <BsFillHouseDoorFill />,
  RiGasStationFill: <RiGasStationFill />,
  MdOutlineAttachMoney: <MdOutlineAttachMoney />,
  AiFillCloud: <AiFillCloud />,
  AiFillCar: <AiFillCar />,
  AiFillCreditCard: <AiFillCreditCard />,
  AiFillGift: <AiFillGift />,
  AiFillMedicineBox: <AiFillMedicineBox />,
  AiFillShop: <AiFillShop />,
  AiFillSkin: <AiFillSkin />,
  AiOutlineBank: <AiOutlineBank />,
};

const IconsSelectBox = () => {
  return (
    <div className="icons-grid-container">
      {ICONS.map((i) => (
        <div className="icons-grid-item" onClick={(e: any) => console.log(i)}>
          <div className="icon">{Icons[i]}</div>
        </div>
      ))}
    </div>
  );
};

export default IconsSelectBox;
