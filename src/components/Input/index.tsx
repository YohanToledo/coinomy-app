import "./input.scss";

import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

type Props = {
  type: string,
  icon: string,
  errorMessage?: string,
  setValue: (value: string) => void,
  inputProps?: any,
}

const Input = ({
  type,
  icon,
  errorMessage,
  setValue,
  inputProps,
}: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: any) => setFocused(true);

  return (
    <>
      <i className="input-icon">
        {icon === "email" ? (
          <MdMail />
        ) : icon === "user" ? (
          <FaUser />
        ) : (
          icon === "lock" && <FaLock />
        )}
      </i>
      <input
        {...inputProps}
        type={type}
        className="input-text font-20"
        onChange={(e: any) => setValue(e.target.value)}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error-msg">{errorMessage}</span>
    </>
  );
};
export default Input;
