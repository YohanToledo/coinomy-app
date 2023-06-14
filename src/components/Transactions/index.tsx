import {
  BsFillCalendarDateFill,
  BsFillCalculatorFill,
  BsFillPencilFill,
  BsFillTagFill,
} from "react-icons/bs";
import { useEffect } from "react";
import InputMoney from "../MoneyWrite";
import Dropdown, { Item } from "../Dropdown";
import { Transaction } from "../../ts/types/transaction.types";
import "./Transactions.scss";
import { useState } from "react";
import Api from "../../shared/requests/Api";
import { Category } from "../../ts/types/category.types";

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

  const [categories, setCategories] = useState<Category[]>([])

  const [disabledSaveButton, setDisabledSaveButton] = useState(false);


  const api = new Api();

  const loadCategoriesSelect = () => {
    const categorySelectOptions: Item[] = []

    const _type = title === "RECEITA" ? "INCOME" : "EXPENSE"

    categories.map(c => {
      if (c.type === _type)
        categorySelectOptions.push({ label: c.description, value: String(c.id) })
    })

    return categorySelectOptions;
  }

  useEffect(() => {
    const findCategories = async () => {
      const response = await api.findAllCategories();

      setCategories(response.data);
      loadCategoriesSelect()
    }

    findCategories()


  }, [])

  const saveTransaction = () => {
    setDisabledSaveButton(true);
    setDisabledSaveButton(false);

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
