import LoginForm from "../../components/LoginForm";
import "./Login.scss";
import { BsGraphUp } from "react-icons/bs";

const Login = () => {
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
                <LoginForm />
            </div>
        </>
    );
};

export default Login;