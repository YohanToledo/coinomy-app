import "./IconsSelectBox.scss";
import { useState } from "react";
import { CategoryIcon } from "../../ts/types/category-icon.types";
import {
  CategoryIconsMapper,
  IconsList,
} from "../../ts/mappers/category-icons.mapper";

type Props = {
  setIconSelected: (icon: CategoryIcon) => void;
};

const IconsSelectBox = ({ setIconSelected }: Props) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="icons-grid-container">
      {IconsList.map((icon, index) => (
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
          <div className="icon">{CategoryIconsMapper[icon]}</div>
        </div>
      ))}
    </div>
  );
};

export default IconsSelectBox;
