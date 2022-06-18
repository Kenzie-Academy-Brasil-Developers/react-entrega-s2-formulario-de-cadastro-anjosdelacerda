import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledForm } from "./style";

import { Usuarios } from "../Usuarios";

import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

function Register() {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("nome obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "necessário nome e sobrenome"
      ),
    email: yup.string().required("email obrigatório").email("email inválido"),
    password: yup
      .string()
      .required("senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "senha fraca"
      ),
    confirmedPassword: yup
      .string()
      .required("confirmação obrigatória")
      .oneOf([yup.ref("password")], "senha desigual!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();
  // console.log(history);

  // const { id } = useParams();

  // console.log(id);

  const onSubmitFunction = (data) => {
    // console.log(data);

    data.id = Usuarios.length + 1;

    window.localStorage.setItem("token", data.id);

    Usuarios.push(data);
    // console.log(Usuarios);

    history.push(`/login/:{data.id}`);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Register</h2>
        <input placeholder="Nome" {...register("name")} />
        <span> {errors.name && errors.name.message} </span>
        <input placeholder="E-mail" {...register("email")} />
        <span>
          <span> {errors.email && errors.email.message} </span>
        </span>
        <input placeholder="Senha" {...register("password")} />
        <span> {errors.password && errors.password.message} </span>
        <input
          placeholder="Confirmar senha"
          {...register("confirmedPassword")}
        />
        <button type="submit">Register</button>
      </StyledForm>
    </div>
  );
}

export default Register;
