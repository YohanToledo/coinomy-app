import "./NewButton.scss";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai"
import Transactions from "../Transactions";

const NewButton = () => {
    return (
        <>
            <div className="new-baseContainer">
                <div className="new-RDchoose">
                    <button className="new-buttonRD">
                        <AiOutlineMinusCircle />
                    </button>
                    <p>Despesa</p>
                </div>

                <div className="new-RDchoose">
                    <button className="new-buttonRD">
                        <AiOutlinePlusCircle />
                    </button>
                    <p>Receita</p>
                </div>
            </div>
        </>
    );
};

export default NewButton;

