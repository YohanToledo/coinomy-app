import "./button.scss";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ReactNode } from "react";

type Props = {
  isLoading: boolean,
  children: ReactNode
}

const Button = ({ isLoading, children }: Props) => {
  return (
    <>
      <button type="submit" className="login-button" disabled={isLoading}>
        {isLoading ? (
          <AiOutlineLoading3Quarters className="load-icon" />
        ) : (
          children
        )}
      </button>
    </>
  );
};
export default Button;
