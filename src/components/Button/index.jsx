import "./button.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ isLoading, children }) => {
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
