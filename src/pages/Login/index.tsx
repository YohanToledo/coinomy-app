import React, { useContext } from 'react';
import LoginForm from "../../components/LoginForm";
import "./Login.scss";
import { BsGraphUp } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';

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
            }

        </>
    );
};

export default Login;