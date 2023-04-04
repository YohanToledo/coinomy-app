import { useState } from "react";
import Button from "../Button";
import "./loginform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";
import Api from "../../shared/requests/Api";
import Modal from "../Modal";

const LoginForm = () => {
  const [modalMsg, setModalMsg] = useState({
    msg: "Email ou Senha Inválidos!",
    type: "error",
  });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(!isLoading);

    try {
      const api = new Api();
      const response = await api.login(email, password);
      console.log(response);

      if (response.status === 201) {
        setModalMsg({ msg: "Login efetuado com sucesso", type: "success" });
        setShowModal(true);
      }
      if (response.status === 401) {
        setModalMsg({ msg: "Email ou Senha Inválidos!", type: "error" });
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
      setModalMsg({ msg: "Erro interno! Contate o Suporte!", type: "error" });
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit} autocomplete="off">
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

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        msgAndType={modalMsg}
      />
    </>
  );
};

export default LoginForm;
