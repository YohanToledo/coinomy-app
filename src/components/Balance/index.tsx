import "./Balance.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import MonthYearSelect from "../MonthYearSelect";

const Balance = () => {
  const [hide, setHide] = useState(true);

  const [month, setMonth] = useState("");
  console.log(month)

  return (
    <>
      <div className="balance-container">
        <div className="balance-header">
          <div className="selector">
            <MonthYearSelect  setMonth={setMonth} />
          </div>
          <button className="hide-values" onClick={() => setHide(!hide)}>
            {hide ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
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
