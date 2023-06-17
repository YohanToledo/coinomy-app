import Voltar from "../Voltar";
import {
  BsGift,
  BsFillCreditCard2BackFill,
  BsCurrencyDollar,
  BsCurrencyEuro,
} from "react-icons/bs";
import {
  TbCurrencyGuarani,
  TbCurrencyDollarCanadian,
  TbCurrencyReal,
} from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { useState } from "react";
import "./Moneytype.scss";
import { AiOutlineEuroCircle } from "react-icons/ai";
import StaticData from "../../shared/static/static-data";
import Modal from "../Modal";
const MoneyType = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const DEFAULT_CURRENCY = "R$";
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const currentCurrency = StaticData.getCurrency();

  const updateCurrencyUsed = () => {
    StaticData.saveCurrency(currency);
  };

  return (
    <>
      <div className="options-container container-money-type">
        <div
          className="money-types"
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <h1>Escolha a moeda</h1>

          <h5>Atual: {currentCurrency}</h5>

          <div
            className="option-card modal-real-money-type"
            onClick={() => {
              setCurrency("R$");
              setShowConfirmDialog(true);
            }}
          >
            <TbCurrencyReal className="icone-logout icone-real" />
            Real
          </div>

          <div
            className="option-card modal-dolar-money-type"
            onClick={() => {
              setCurrency("$");
              setShowConfirmDialog(true);
            }}
          >
            <BsCurrencyDollar className="icone-logout icone-dolar" />
            Dolar
          </div>
          <div
            className="option-card modal-peso-moneyType"
            onClick={() => {
              setCurrency("C$");
              setShowConfirmDialog(true);
            }}
          >
            <TbCurrencyDollarCanadian className="icone-logout icone-pesos" />
            Dolar Canadense
          </div>
          <div
            className="option-card modal-euro-money-type"
            onClick={() => {
              setCurrency("€");
              setShowConfirmDialog(true);
            }}
          >
            <BsCurrencyEuro className="icone-logout icone-moneytype" />
            Euro
          </div>

          <div
            className="option-card modal-real-money-type"
            onClick={() => {
              setCurrency("₲");
              setShowConfirmDialog(true);
            }}
          >
            <TbCurrencyGuarani className="icone-logout icone-real" />
            Guaraní PY
          </div>
        </div>
      </div>

      <Modal
        show={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
      >
        <div
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        >
          <div className="delete-transaction-confirmation">
            <div>
              <h2 className="delete-transaction-title">Alterar moeda</h2>
            </div>
            <div>
              <h3 className="delete-transaction-warn">
                Deseja realmente alterar a moeda utilizada? {currentCurrency}{" "}
                &#x2192; {currency}
              </h3>
            </div>
            <div className="delete-transaction-buttons">
              <div>
                <button
                  type="button"
                  className="delete-transaction-confirm"
                  onClick={() => {
                    updateCurrencyUsed();
                    setShowConfirmDialog(false);
                  }}
                >
                  SIM
                </button>
                <button
                  type="button"
                  className="delete-transaction-cancel"
                  onClick={() => setShowConfirmDialog(false)}
                >
                  NÃO
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default MoneyType;
