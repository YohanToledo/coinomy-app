import {
  BsFillCalendarDateFill,
  BsFillCalculatorFill,
  BsFillPencilFill,
  BsFillTagFill,
} from "react-icons/bs";
import InputMoney from "../MoneyWrite";
import Dropdown, { Item } from "../Dropdown";
import { Transaction } from "../../ts/types/transaction.types";
import "./Transactions.scss";
import { useState } from "react";
import { Category } from "../../ts/types/category.types";
import StaticData from "../../shared/static/static-data";

type Props = {
  title: "RECEITA" | "DESPESA";
  transactionId: number;
  transactionValue?: string;
  transactionDate?: string;
  transactionDescription?: string;
  transactionCategory?: Category;
  transactionBank?: string;
  onSave: (transaction: Transaction) => void;
};
const Transactions = ({
  title,
  transactionId,
  transactionValue,
  transactionDescription,
  transactionDate,
  transactionCategory,
  onSave,
}: Props) => {
  const [value, setValue] = useState(transactionValue || "");
  const [time, setTime] = useState(transactionDate || "");
  const [desc, setDescription] = useState(transactionDescription || "");
  const [category, setCategory] = useState({
    label: transactionCategory?.description || "Categoria",
    value: String(transactionCategory?.id) || "0",
  });

  StaticData.saveCategoriesToLocalStorage();
  const categories: Category[] = StaticData.findAllCategories();

  const [disabledSaveButton, setDisabledSaveButton] = useState(false);

  const loadCategoriesSelect = () => {
    const categorySelectOptions: Item[] = [];

    const _type = title === "RECEITA" ? "INCOME" : "EXPENSE";

    categories.map((c) => {
      if (c.type === _type)
        categorySelectOptions.push({
          label: c.description,
          value: String(c.id),
        });
    });

    return categorySelectOptions;
  };

  const saveTransaction = () => {
    setDisabledSaveButton(true);
    setDisabledSaveButton(false);

    console.log(category);
    console.log(Number(category.value));

    const _defaultCategory = categories[0];
    const _category = categories.find((c) => c.id === Number(category.value));

    console.log(_category);

    const transaction: Transaction = {
      id: transactionId,
      category: _category || _defaultCategory,
      description: desc,
      value: Number(
        value.replaceAll(",", "").replaceAll("R$", "").replaceAll(" ", "")
      ),
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
              onClick={() => console.log(categories)}
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
                    required
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
                      items={loadCategoriesSelect()}
                      selected={category}
                      setSelected={setCategory}
                    />
                  </div>
                </div>
              </label>
            </div>
          </div>
          <button
            type="submit"
            id="save_button-addTransactions"
            onClick={saveTransaction}
            disabled={disabledSaveButton}
          >
            Salvar
          </button>
        </form>
      </main>
    </>
  );
};

export default Transactions;
