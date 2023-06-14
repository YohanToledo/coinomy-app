import { useState } from "react";
import "./Dropdown.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export type Item = {
  value: string;
  label: string;
};

type Props = {
  items: Item[];
  selected: Item;
  setSelected: (param: Item) => void;
};

const Dropdown = ({ items, selected, setSelected }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown-container">
      <button
        type="button"
        className="dropdown-toggle"
        onSubmit={(e: any) => e.preventDefault()}
        onClick={(e: any) => setShowDropdown(!showDropdown)}
      >
        <div>{selected?.label || "Mês"}</div>
        <div>
          {showDropdown ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </div>
      </button>

      {showDropdown ? (
        <ul className="dropdown-menu bg-3">
          {items.map((item) => (
            <li
              className="dropdown-item s-c bottom"
              value={`${item.value}`}
              accessKey={item.label}
              onClick={(e: any) => {
                setSelected({
                  label: e.target.accessKey,
                  value: String(e.target.value),
                });
                setShowDropdown(!showDropdown);
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
