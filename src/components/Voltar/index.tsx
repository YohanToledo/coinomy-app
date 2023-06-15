import { TfiBackLeft } from "react-icons/tfi";
const Voltar = () => {
    return (
        <>
            <div
                className="option-card component-voltar"
                onClick={() => {
                    window.history.back();
                }}
            >
                <TfiBackLeft className="icone-voltar" />
                Voltar
            </div>
        </>
    );
};
export default Voltar;

