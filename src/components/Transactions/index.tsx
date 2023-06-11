import "./Transactions.scss";
import { useState } from "react";
import Dropdown from "../Dropdown";
import {
  BsFillCalendarDateFill,
  BsFillCalculatorFill,
  BsFillPencilFill,
  BsFillTagFill,
  BsFillCreditCardFill,
} from "react-icons/bs";
import ToggleButton from "../ToggleButtonSlider";
import InputMoney from "../MoneyWrite";

import { Transaction } from "../Card/types/Transaction";

type Props = {
  title: "RECEITA" | "DESPESA";
  transactionId: number;
  transactionValue?: string;
  transactionDate?: string;
  transactionDescription?: string;
  transactionCategory?: string;
  transactionBank?: string;
  onSave: (transaction: Transaction) => void;
};
const Transactions = ({
  title,
  transactionId,
  transactionValue,
  transactionDescription,
  transactionDate,
  onSave,
}: Props) => {
  const [value, setValue] = useState(transactionValue || "");
  const [time, setTime] = useState(transactionDate || "");
  const [desc, setDescription] = useState(transactionDescription || "");
  const [category, setCategory] = useState({ label: "Categoria", value: "1" });
  const [bank, setBank] = useState({ label: "Banco", value: "1" });
  const [selected, setSelected] = useState(false);

  const saveTransaction = () => {
    const _category = category.label.toLowerCase();
    const _icon =
      _category === "mercado"
        ? "BsFillCartFill"
        : _category === "combustivel"
        ? "RiGasStationFill"
        : "MdOutlineAttachMoney";

    const transaction: Transaction = {
      id: transactionId,
      icon: _icon,
      description: desc,
      value: Number(value.slice(3).replaceAll(",", "")),
      transactionDate: new Date(`${time}T12:00:00`),
      type: title === "DESPESA" ? "EXPENSE" : "INCOME",
    };

    onSave(transaction);
  };

  return (
    <>
      <main id="containerBaseNew-addTransactions">
        <form id="recieve-addTransactions" className="transaction-form">
          <div id="form_header-addTransactions">
            <h1
              className={
                title.toUpperCase() === "RECEITA"
                  ? "colorReceita"
                  : "colorDespesa"
              }
            >
              {title}
            </h1>
          </div>
          <div id="inputs-addTransactions">
            <div className="input-box-addTransactions">
              <label htmlFor="money-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    <BsFillCalculatorFill />
                  </div>
                  <InputMoney value={value} setValue={setValue} />
                </div>
              </label>
            </div>

            {/*<div className="input-box-addTransactions">
              <label htmlFor="recebido">
                <div className="input-field-addTransactions">
                  <ToggleButton setSelected={setSelected} />
                  <p className="recebido-addTransactions">
                    {title.toUpperCase() === "RECEITA" ? "Recebido" : "Pago"}
                  </p>
                </div>
              </label>
            </div>*/}

            <div className="input-box-addTransactions">
              <label htmlFor="date-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    <BsFillCalendarDateFill />
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="Data"
                    value={time}
                    onChange={(e: any) => setTime(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className="input-box-addTransactions">
              <label htmlFor="description-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    <BsFillPencilFill />
                  </div>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descrição"
                    value={desc}
                    onChange={(e: any) => setDescription(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className="input-box-addTransactions">
              <label htmlFor="categoria-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    <BsFillTagFill />
                  </div>
                  <div className="list-addTransactions dropdown-category">
                    <Dropdown
                      items={Categories}
                      selected={category}
                      setSelected={setCategory}
                    />
                  </div>
                </div>
              </label>
            </div>

            {/*<div className="input-box-addTransactions">
              <label htmlFor="banco-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    <BsFillCreditCardFill />
                  </div>
                  <div className="list-addTransactions dropdown-bankAccount">
                    <Dropdown
                      items={Banks}
                      selected={bank}
                      setSelected={setBank}
                    />
                  </div>
                </div>
              </label>
          </div>*/}
          </div>
          <button
            type="submit"
            id="save_button-addTransactions"
            onClick={saveTransaction}
          >
            Salvar
          </button>
        </form>
      </main>
    </>
  );
};

const Categories = [
  { label: "Mercado", value: "Mercado" },
  { label: "Salario", value: "Salario" },
  { label: "Combustivel", value: "Combustivel" },
];
const Banks = [
  { label: "Bradesco", value: "Bradesco" },
  { label: "Itaú", value: "Itaú" },
  { label: "Next", value: "Next" },
];

export default Transactions;
