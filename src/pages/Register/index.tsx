import "../pages.css";
import { BsGraphUp } from "react-icons/bs";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
    return (
        <>
            <div className="left-column">
                <div className="icons-panel">
                    <h1 className="brand">Coinomy</h1>
                    <div className="icon">
                        <BsGraphUp />
                    </div>
                </div>
            </div>
            <div className="right-column">
                <RegisterForm />
            </div>
        </>
    );
};

export default Register;
