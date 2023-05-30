import "./Transactions.scss";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { BsFillCalendarDateFill, BsFillCalculatorFill, BsFillPencilFill, BsFillTagFill, BsFillCreditCardFill } from "react-icons/bs"
import ToggleButton from "../ToggleButtonSlider";
import InputMoney from "../MoneyWrite";

type Item = {
    value: string,
    label: string
}


type Props = {
    title: "RECEITA" | "DESPESA";
}
const Transactions = ({ title }: Props) => {
    const [value, setValue] = useState("")
    const [time, setTime] = useState("")
    const [desc, setDescription] = useState("")
    const [category, setCategory] = useState({ label: "Categoria", value: "1" })
    const [bank, setBank] = useState({ label: "Banco", value: "1" })
    const [selected, setSelected] = useState(false)
    return (
        <>
            <main id="containerBaseNew-addTransactions">
                <form id="recieve-addTransactions" onSubmit={(e: any) => e.preventDefault()}>

                    <div id="form_header-addTransactions">
                        <h1 className={title.toUpperCase() === "RECEITA" ? "colorReceita" : "colorDespesa"}>{title}</h1>
                    </div>

                    <div id="inputs-addTransactions">
                        <div className="input-box-addTransactions">
                            <label htmlFor="money-addTransactions">
                                <div className="input-field-addTransactions">
                                    <div className="transactionIcons">
                                        <BsFillCalculatorFill />
                                    </div>
                                    <InputMoney value={value} setValue={setValue}/>
                                </div>
                            </label>
                        </div>

                        <div className="input-box-addTransactions">
                            <label htmlFor="recebido">
                                <div className="input-field-addTransactions">
                                    <ToggleButton setSelected={setSelected}/>
                                    <p className="recebido-addTransactions">{title.toUpperCase() === "RECEITA" ? "Recebido" : "Pago"}</p>
                                </div>
                            </label>
                        </div>

                        <div className="input-box-addTransactions">
                            <label htmlFor="date-addTransactions">
                                <div className="input-field-addTransactions">
                                    <div className="transactionIcons">
                                        <BsFillCalendarDateFill />
                                    </div>
                                    <input type="date" id="date" name="date" placeholder="Data" onChange={(e:any) => setTime(e.target.value)}/>
                                </div>
                            </label>
                        </div>

                        <div className="input-box-addTransactions">
                            <label htmlFor="description-addTransactions">
                                <div className="input-field-addTransactions">
                                    <div className="transactionIcons">
                                        <BsFillPencilFill />
                                    </div>
                                    <input type="text" id="description" name="description" placeholder="Descrição" onChange={(e:any) => setDescription(e.target.value)}/>
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
                                        <Dropdown items={Categories} selected={category} setSelected={setCategory} />
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div className="input-box-addTransactions">
                            <label htmlFor="banco-addTransactions">
                                <div className="input-field-addTransactions">
                                    <div className="transactionIcons">
                                        <BsFillCreditCardFill />
                                    </div>
                                    <div className="list-addTransactions dropdown-bankAccount">
                                        <Dropdown items={Banks} selected={bank} setSelected={setBank} />
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <button type="submit" id="save_button-addTransactions">
                        Salvar
                    </button>
                </form>
            </main>
        </>
    );
};


const Categories = [{ label: "Lazer", value: "Lazer" }, { label: "Despesa Fixa", value: "Despesa Fixa" }, { label: "Investimentos", value: "Investimentos" }]
const Banks = [{ label: "Bradesco", value: "Bradesco" }, { label: "Itaú", value: "Itaú" }, { label: "Next", value: "Next" }]

export default Transactions;