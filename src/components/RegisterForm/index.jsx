import { useState } from "react";
import Button from "../Button";
import "./registerform.css";
import Input from "../Input";
import { Link } from "react-router-dom";
import "../styles.css";
import { validatePassword } from "../../utils/validate";
import Api from "../../shared/requests/Api";
import Modal from "../Modal";

const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState({
    msg: "As senhas devem ser iguais!",
    type: "error",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const error = {
    name: "O nome deve conter apenas letras! (mínimo: 4)",
    email: "Formato de email inválido",
    password:
      "A senha deve conter no mínimo 8 caracteres e incluir letra maiúscula, minúscula, números e caracteres especiais.",
    confirmPassword: "Campo obrigatorio",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (validateData()) {
        const api = new Api();
        const response = await api.register(name, email, password);
        console.log(response);

        if (response.status === 400) {
          setModalMsg({ msg: "Email já cadastrado!", type: "error" });
          setShowModal(true);
        }

        if (response.status === 201) {
          setModalMsg({ msg: "Cadastrado com sucesso", type: "success" });
          setShowModal(true);
        }
      } else {
        setModalMsg({
          msg: "As senhas devem ser iguais!",
          type: "error",
        });
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

  const validateData = () => {
    const validPass = validatePassword(password, confirmPassword);

    return validPass;
  };

  return (
    <>
      <div className="custom-form">
        <form className="form" onSubmit={handleSubmit} autocomplete="off">
          <div className="row">
            <h1 className="title">Crie sua conta</h1>
          </div>
          <div className="row">
            <label>Nome completo</label>
          </div>
          <div className="row">
            <Input
              type="text"
              icon="user"
              setValue={setName}
              errorMessage={error.name}
              required={true}
              pattern={"^[^ ][A-zÀ-ž ]{3,32}$"}
            />
          </div>
          <div className="row">
            <label>Email</label>
          </div>
          <div className="row">
            <Input
              type="email"
              icon="email"
              setValue={setEmail}
              errorMessage={error.email}
              required={true}
            />
          </div>
          <div className="row">
            <label>Senha</label>
          </div>
          <div className="row">
            <Input
              type="password"
              icon="lock"
              setValue={setPassword}
              errorMessage={error.password}
              required={true}
              pattern={
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
              }
            />
          </div>
          <div className="row">
            <label>Confirme a senha</label>
          </div>
          <div className="row">
            <Input
              type="password"
              icon="lock"
              setValue={setConfirmPassword}
              errorMessage={error.confirmPassword}
              required={true}
            />
          </div>
          <div className="row">
            <Button isLoading={isLoading}> Concluir cadastro </Button>
          </div>
          <div className="row">
            <Link to={"/login"} replace={true}>
              <span className="form-link">
                Já possui cadastro? Faça o login já!
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

export default RegisterForm;
