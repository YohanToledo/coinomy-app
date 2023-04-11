import React, { useContext } from 'react';
import LoginForm from "../../components/LoginForm";
import "./Login.scss";
import { BsGraphUp } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';
import LogoImg from '../../assets/img/logo-light.png';

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
                                {/*<h1 className="brand">Coinomy</h1>*/}
                                <div className="logo">
                                    {/*<BsGraphUp />*/}
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