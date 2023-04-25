import "./Transactions.scss";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { BsFillCalendarDateFill, BsFillCalculatorFill, BsFillPencilFill, BsFillTagFill, BsFillCreditCardFill } from "react-icons/bs"

type Item = {
    value: string,
    label: string
}

const Transactions = () => {
    const [category, setCategory] = useState({ label: "Categoria", value: "1" })
    const [bank, setBank] = useState({ label: "Banco", value: "1" })
    return (
        <>
            <main id="containerBaseNew" className="bp-2">
                <form id="recieve" onSubmit={(e: any) => e.preventDefault()}>

                    <div id="form_header">
                        <h1>RECEITA</h1>
                    </div>

                    <div id="inputs">

                        <div className="input-box">
                            <label htmlFor="money">
                                <div className="input-field">
                                    <div className="transactionIcons">
                                        <BsFillCalculatorFill />
                                    </div>
                                    <input type="text" id="money" name="money" placeholder="R$ 00,00" />
                                </div>
                            </label>
                        </div>


                        <div className="input-box">
                            <label htmlFor="recebido">
                                <div className="input-field">
                                    <label className="switch">
                                        <input type="checkbox"></input>
                                        <span className="slider round"></span>
                                    </label>
                                    <p className="recebido">Recebido</p>
                                </div>
                            </label>
                        </div>


                        <div className="input-box">
                            <label htmlFor="date">
                                <div className="input-field">
                                    <div className="transactionIcons">
                                        <BsFillCalendarDateFill />
                                    </div>

                                    <input type="date" id="date" name="date" placeholder="Data" />
                                </div>
                            </label>
                        </div>

                        <div className="input-box">
                            <label htmlFor="description">
                                <div className="input-field">
                                    <div className="transactionIcons">
                                        <BsFillPencilFill />
                                    </div>

                                    <input type="text" id="description" name="description" placeholder="Descrição" />
                                </div>
                            </label>
                        </div>

                        <div className="input-box">
                            <label htmlFor="categoria">
                                <div className="input-field">
                                    <div className="transactionIcons">
                                        <BsFillTagFill />
                                    </div>
                                    <div className="list dropdown-category">
                                        <Dropdown items={Categories} selected={category} setSelected={setCategory} />
                                    </div>
                                </div>
                            </label>
                        </div>


                        <div className="input-box">
                            <label htmlFor="banco">
                                <div className="input-field">
                                <div className="transactionIcons">
                                    <BsFillCreditCardFill />
                                </div>
                                <div className="list dropdown-bankAccount">
                                    <Dropdown items={Banks} selected={bank} setSelected={setBank} />
                                </div>
                                </div>
                            </label>
                        </div>


                    </div>







                    <button type="submit" id="save_button">
                        Salvar
                    </button>
                </form>
            </main>
        </>
    );
};

const Categories = [{ label: "Categoria 1", value: "Categoria 1" }, { label: "Categoria 2", value: "Categoria 2" }, { label: "Categoria 3", value: "Categoria 3" }]
const Banks = [{ label: "Bradesco", value: "Bradesco" }, { label: "Itaú", value: "Itaú" }, { label: "Next", value: "Next" }]

export default Transactions;