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
import { useEffect, useState } from "react";
import { Category } from "../../ts/types/category.types";
import StaticData from "../../shared/static/static-data";
import { CategoryIconsMapper } from "../../ts/mappers/category-icons.mapper";
import { formatCurrency } from "../../utils/format-currency";

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
  const [description, setDescription] = useState(transactionDescription || "");
  const [category, setCategory] = useState({
    label: transactionCategory?.description || "Categoria",
    value: String(transactionCategory?.id || 0),
  });

  StaticData.saveDefaultCategoriesToLocalStorage();
  const categories: Category[] = StaticData.findAllCategories();

  const [disabledSaveButton, setDisabledSaveButton] = useState(true);

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
    //prevent double click (temporary)
    setDisabledSaveButton(true);
    setDisabledSaveButton(false);

    const _defaultCategory = categories[0];
    const _category = categories.find((c) => c.id === Number(category.value));

    const transaction: Transaction = {
      id: transactionId,
      category: _category || _defaultCategory,
      description: description,
      value: Number(
        value
          .replaceAll(",", "")
          .replaceAll(`${StaticData.getCurrency()}`, "")
          .replaceAll(" ", "")
      ),
      transactionDate: new Date(`${time}T12:00:00`),
      type: title === "DESPESA" ? "EXPENSE" : "INCOME",
    };

    onSave(transaction);
  };

  const handleFieldsNotEmpty = () => {
    const isDescriptionEmpty = description === "";
    const isValueEmpty = value === "";
    const isCategoryNotSelected = category.value === "0";
    const isDateEmpty = time === "";

    setDisabledSaveButton(
      isDescriptionEmpty || isValueEmpty || isCategoryNotSelected || isDateEmpty
    );
  };

  useEffect(() => {
    handleFieldsNotEmpty();
  }, [description, category, value, time]);

  const getIconCategorySelected = () => {
    let c = categories.find((c) => c.id === Number(category.value))?.icon;

    if (c) {
      return CategoryIconsMapper[c];
    } else {
      return <BsFillTagFill />;
    }
  };

  return (
    <>
      <main id="containerBaseNew-addTransactions">
        <form
          id="recieve-addTransactions"
          className="transaction-form"
          onSubmit={saveTransaction}
        >
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
                  <InputMoney
                    value={formatCurrency(value)}
                    setValue={setValue}
                  />
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
                    value={description}
                    onChange={(e: any) => setDescription(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className="input-box-addTransactions">
              <label htmlFor="categoria-addTransactions">
                <div className="input-field-addTransactions">
                  <div className="transactionIcons">
                    {getIconCategorySelected()}
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
            disabled={disabledSaveButton}
            className={disabledSaveButton ? "disabled-btn" : ""}
          >
            Salvar
          </button>
        </form>
      </main>
    </>
  );
};

export default Transactions;
