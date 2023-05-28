import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import Api from "../../shared/requests/Api";
import NotificationPopUp from "../NotificationPopUp";

const LoginForm = () => {
  const [NotificationPopUpMsg, setNotificationPopUpMsg] = useState({
    msg: "Email ou Senha Inválidos!",
    type: "error",
  });
  const [showNotificationPopUp, setShowNotificationPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(!isLoading);

    try {
      const api = new Api();
      const response = await api.login(email, password);
      console.log(response);

      if (response.status === 201) {
        setNotificationPopUpMsg({ msg: "Login efetuado com sucesso", type: "success" });
        setShowNotificationPopUp(true);

        navigate("/app");
      }
      if (response.status === 401) {
        setNotificationPopUpMsg({ msg: "Email ou Senha Inválidos!", type: "error" });
        setShowNotificationPopUp(true);
      }
    } catch (error) {
      console.log(error);
      setNotificationPopUpMsg({ msg: "Erro interno! Contate o Suporte!", type: "error" });
      setShowNotificationPopUp(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit} autoComplete="off">
          <div className="row">
            <h1 className="title">Acesse sua conta</h1>
          </div>
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <Input type="text" icon="email" setValue={setEmail} />
          </div>
          <div className="row">
            <label>Senha</label>
          </div>
          <div className="row">
            <Input type="password" icon="lock" setValue={setPassword} />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Login </Button>
          </div>
          <div className="row">
            <Link to={"/register"} replace={true}>
              <span className="form-link">
                Não possui uma conta? Cadastre-se já!
              </span>
            </Link>
          </div>
        </form>
      </div>

      <NotificationPopUp
        onClose={() => setShowNotificationPopUp(false)}
        show={showNotificationPopUp}
        msgAndType={NotificationPopUpMsg}
      />
    </>
  );
};

export default LoginForm;
