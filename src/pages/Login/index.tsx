import "../login-register.scss";
import { useContext } from 'react';
import LoginForm from "../../components/LoginForm";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';
import LogoImg from '../../assets/img/logo-dark.png';

const Login = () => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            {
                isAuthenticated
                    ?
                    <Navigate to="/app/home" />
                    :
                    <>
                        <div className="left-column">
                            <div className="icons-panel">
                                <div>
                                    <img className="logo-img" src={LogoImg} />
                                </div>
                            </div>
                        </div>

                        <div className="right-column">
                            <LoginForm />
                        </div>
                    </>
            }

        </>
    );
};

export default Login;