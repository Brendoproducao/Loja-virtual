import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./login.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login com:", data);
    // Aqui você pode chamar uma API de login ou validar localStorage
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Bem-vindo de volta</h2>

        <div className="input-group">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "E-mail inválido",
              },
            })}
          />
        </div>
        {errors.email && <span className="error">{errors.email.message}</span>}

        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Senha"
            {...register("senha", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "Senha deve ter no mínimo 6 caracteres",
              },
            })}
          />
        </div>
        {errors.senha && <span className="error">{errors.senha.message}</span>}

        <button id="button-login" type="submit">Entrar</button>
        <p className="login-footer">Esqueceu a senha? <a href="#">Clique aqui</a></p>
      </form>
    </div>
  );
};

export default LoginForm;
