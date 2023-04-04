import "./Balance.scss";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Balance = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      <div className="balance-container">
        <div className="balance-header">
          <div className="month-name">JANEIRO</div>
          <div className="hide-values" onClick={() => setHide(!hide)}>
            <AiOutlineEyeInvisible />
          </div>
        </div>
        <div className="month-balance">
          <div className="balance-title">Balanço Mensal</div>

          <div className="value">{hide ? "*******" : "R$1500.00"}</div>
        </div>
        <div className="income-expenses">
          <div className="income">
            <div>
              <BsFillArrowUpCircleFill className="arrow-up" />
            </div>

            <div className="value">{hide ? "*******" : "R$500.00"}</div>
          </div>
          <div className="expense">
            <div>
              <BsFillArrowDownCircleFill className="arrow-down" />
            </div>

            <div className="value">{hide ? "*******" : "R$1500.00"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
