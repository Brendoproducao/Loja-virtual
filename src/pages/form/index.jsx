import React from "react";
import { useForm } from "react-hook-form";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt, FaIdCard } from "react-icons/fa";
import "./form.css";

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const senha = watch("senha");

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>

        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Nome completo"
            {...register("nome", { required: "Nome é obrigatório" })}
          />
        </div>
        {errors.nome && <span className="error">{errors.nome.message}</span>}

        <div className="input-group">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
            })}
          />
        </div>
        {errors.email && <span className="error">{errors.email.message}</span>}

        <div className="input-group">
          <FaIdCard />
          <input
            type="text"
            placeholder="CPF (somente números)"
            {...register("cpf", {
              required: "CPF é obrigatório",
              pattern: { value: /^\d{11}$/, message: "CPF inválido" },
            })}
          />
        </div>
        {errors.cpf && <span className="error">{errors.cpf.message}</span>}

        <div className="input-group">
          <FaPhone />
          <input
            type="tel"
            placeholder="Celular (11999999999)"
            {...register("celular", {
              required: "Celular é obrigatório",
              pattern: { value: /^\d{11}$/, message: "Celular inválido" },
            })}
          />
        </div>
        {errors.celular && <span className="error">{errors.celular.message}</span>}

        <div className="input-group">
          <FaPhone />
          <input
            type="tel"
            placeholder="Telefone fixo (opcional)"
            {...register("telefone", {
              pattern: { value: /^\d{10}$/, message: "Telefone inválido" },
            })}
          />
        </div>
        {errors.telefone && <span className="error">{errors.telefone.message}</span>}

        <div className="input-group">
          <FaMapMarkerAlt />
          <input
            type="text"
            placeholder="CEP (somente números)"
            {...register("cep", {
              required: "CEP é obrigatório",
              pattern: { value: /^\d{8}$/, message: "CEP inválido" },
            })}
          />
        </div>
        {errors.cep && <span className="error">{errors.cep.message}</span>}

        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Senha"
            {...register("senha", {
              required: "Senha é obrigatória",
              minLength: { value: 6, message: "Mínimo 6 caracteres" },
            })}
          />
        </div>
        {errors.senha && <span className="error">{errors.senha.message}</span>}

        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Confirmar senha"
            {...register("confirmarSenha", {
              required: "Confirmação obrigatória",
              validate: (value) => value === senha || "Senhas não conferem",
            })}
          />
        </div>
        {errors.confirmarSenha && (
          <span className="error">{errors.confirmarSenha.message}</span>
        )}

        <button id="button-form" type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
