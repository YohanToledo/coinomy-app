import "../login-register.scss";
import RegisterForm from "../../components/RegisterForm";
import LogoImg from '../../assets/img/logo-dark.png';

const Register = () => {
    return (
        <>
            <div className="left-column">
                <div className="icons-panel">
                    <div>
                        <img className="logo-img" src={LogoImg} />
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
