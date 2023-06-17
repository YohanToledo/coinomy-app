import "./Balance.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import MonthYearSelect from "../MonthYearSelect";
import StaticData from "../../shared/static/static-data";
import { formatCurrency } from "../../utils/format-currency";

type Props = {
  setDate: (param: string) => void;
  hideValues: boolean;
  setHideValues: (param: boolean) => void;
};

const Balance = ({ setDate, hideValues, setHideValues }: Props) => {
  const [month, setMonth] = useState("");

  useEffect(() => {
    setDate(month);
  }, [month]);

  const totalIncome = StaticData.totalIncomeValue(
    new Date(`${month}-01T12:00:00`)
  ).toFixed(2);
  const totalExpense = StaticData.totalExpenseValue(
    new Date(`${month}-01T12:00:00`)
  ).toFixed(2);
  const totalBalance = StaticData.totalBalanceValue(
    new Date(`${month}-01T12:00:00`)
  );

  return (
    <>
      <div className="balance-container">
        <div className="balance-header">
          <div className="selector">
            <MonthYearSelect setMonth={setMonth} />
          </div>
          <button
            className="hide-values"
            onClick={() => setHideValues(!hideValues)}
          >
            {hideValues ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        </div>
        <div className="month-balance">
          <div className="balance-title">Balanço Mensal</div>

          <div className="value">
            {hideValues
              ? "*******"
              : totalBalance < 0
              ? "-" + formatCurrency(totalBalance.toFixed(2))
              : formatCurrency(totalBalance.toFixed(2))}
          </div>
        </div>
        <div className="income-expenses">
          <div className="income">
            <div>
              <BsFillArrowUpCircleFill className="arrow-up" />
            </div>
            <div className="value">
              {hideValues ? "*******" : formatCurrency(totalIncome)}
            </div>
          </div>

          <div className="expense">
            <div>
              <BsFillArrowDownCircleFill className="arrow-down" />
            </div>
            <div className="value">
              {hideValues ? "*******" : `- ${formatCurrency(totalExpense)}`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
