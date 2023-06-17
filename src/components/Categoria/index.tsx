import { useEffect, useState } from "react";
import "./Categoria.scss";
import Modal from "../Modal";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import Voltar from "../Voltar";
import IconsSelectBox from "../IconsSelectBox";
import { Category } from "../../ts/types/category.types";
import { CategoryIcon } from "../../ts/types/category-icon.types";
import StaticData from "../../shared/static/static-data";
import { CategoryIconsMapper } from "../../ts/mappers/category-icons.mapper";

const Categoria = () => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [typeCategory, setTypeCategory] = useState<"INCOME" | "EXPENSE">(
    "INCOME"
  );
  const [description, setDescription] = useState("");

  const DEFAULT_ICON = "MdOutlineAttachMoney";
  const [iconeSelected, setIconSelected] = useState<CategoryIcon>(DEFAULT_ICON);
  const [hideIcons, setHideIcons] = useState(true);

  const handleSaveCategory = () => {
    const category: Category = {
      id: Date.now(),
      description: description,
      icon: iconeSelected,
      type: typeCategory,
    };

    StaticData.addCategory(category);
  };

  const handleSelecetIcon = () => setHideIcons(true);
  useEffect(() => {
    handleSelecetIcon();
  }, [iconeSelected]);

  return (
    <>
      <div className="options-container container-categoria">
        <h1 id="titulo-categoria">Categoria</h1>

        <div
          className="option-card categoria-receitas"
          onClick={() => {
            setShowCategoryForm(true);
            setTypeCategory("INCOME");
          }}
        >
          <FaArrowCircleUp className="icone-receita" />
          &nbsp;Adicionar Categoria de Receita
        </div>

        <div
          className="option-card categoria-despesas"
          onClick={() => {
            setShowCategoryForm(true);
            setTypeCategory("EXPENSE");
          }}
        >
          <FaArrowCircleDown className="icone-despesa" />
          &nbsp;Adicionar Categoria de Despesa
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
            className="w-100"
          >
            <div className="modal-nomeCategoria">
              <form
                action=""
                className="modal-formulario-receitas_despesas"
                onSubmit={handleSaveCategory}
              >
                <div className="modal-opcoesFormulario">
                  <div className="categoria-modal-titulo">
                    <h2 className="titulo-criar-categoria">
                      Categoria de{" "}
                      {typeCategory === "INCOME" ? "Receitas" : "Despesas"}{" "}
                    </h2>
                  </div>

                  <section className="p-m-1 categoria-modal-section">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Descrição"
                      onChange={(e: any) => setDescription(e.target.value)}
                    />
                  </section>

                  <section className="p-m-1 categoria-modal-icones">
                    <button
                      type="button"
                      onClick={() => {
                        setHideIcons(!hideIcons);
                      }}
                    >
                      {iconeSelected === DEFAULT_ICON ? (
                        <>
                          <HiOutlinePlus className="modal-icone-btn" />{" "}
                          Selecionar ícone
                        </>
                      ) : (
                        CategoryIconsMapper[iconeSelected]
                      )}
                    </button>
                  </section>

                  <div
                    className={`categoria-selecionar-icone ${
                      hideIcons ? "hideIcons" : ""
                    }`}
                  >
                    <IconsSelectBox setIconSelected={setIconSelected} />
                  </div>

                  <section className="p-m-1 categoria-modal-salvar">
                    <button type="submit">Salvar</button>
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
