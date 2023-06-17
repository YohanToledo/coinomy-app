import { useContext, useState } from "react";
import "./Categoria.scss";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../Modal";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import Voltar from "../Voltar";
import IconsSelectBox from "../IconsSelectBox";


const Categoria = () => {
    const { logout } = useContext(AuthContext);
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const [typeCategory, setTypeCategory] = useState<"INCOME" | "EXPENSE">("INCOME");
    const [iconeSelected, setIconSelected] = useState("");
    console.log(iconeSelected);

    const [showIcons, setShowIcons] = useState(false);

    return (
        <>
            <div className="options-container container-categoria">
                <h1 id="titulo-categoria">Categoria</h1>

                <div className="option-card categoria-receitas"
                    onClick={() => {
                        setShowCategoryForm(true);
                        setTypeCategory("INCOME");
                    }}
                >
                    <FaArrowCircleUp className="icone-receita" />

                    {/*
                        " &nbsp; " este comando significa "Espaço"
                        Alerta: Areranjo técnico profissional.
                        Utilizei esse comando para setar um espaço entre 
                        os ícones Categoria e receita. Caso for colocado
                        mais espaços, vai respeitas os espaços fornecidos.                        
                    */}
                    &nbsp;Categoria de receitas
                </div>

                <div className="option-card categoria-despesas"
                    onClick={() => {
                        setShowCategoryForm(true);
                        setTypeCategory("EXPENSE");
                    }}
                >
                    <FaArrowCircleDown className="icone-despesa" />
                    &nbsp;Categoria de despesas
                </div>

                <Voltar />

                <Modal
                    show={showCategoryForm}
                    onClose={() => {
                        setShowCategoryForm(false);
                    }}
                >

                    <div
                        onClick={(e: any) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="modal-nomeCategoria">
                            <form action="" className="modal-formulario-receitas_despesas">
                                <div className="modal-opcoesFormulario">

                                    <div className="categoria-modal-titulo">
                                        <h1>Categoria {typeCategory === "INCOME" ? "Receitas" : "Despesas"} </h1>
                                    </div>

                                    <section className="p-m-1 categoria-modal-section">
                                        <input type="text" name="" id="" placeholder="Descrição" />
                                    </section>

                                    <section className="p-m-1 categoria-modal-icones">
                                        <button type="button"

                                            onClick={() => {
                                                setShowIcons(!showIcons);
                                            }}
                                        >
                                            <HiOutlinePlus className="modal-icone-btn" /> Selecionar ícone

                                        </button>
                                    </section>

                                    <div className={`categoria-selecionar-icone ${showIcons ? "showIcons" : ""}`}>
                                        <IconsSelectBox setIconSelected={setIconSelected} />
                                    </div>

                                    <section className="p-m-1 categoria-modal-salvar">
                                        <button type="button">
                                            Salvar
                                        </button>
                                    </section>

                                </div>

                            </form>
                        </div>

                    </div>
                </Modal>
            </div>
        </>
    );
};
export default Categoria;

