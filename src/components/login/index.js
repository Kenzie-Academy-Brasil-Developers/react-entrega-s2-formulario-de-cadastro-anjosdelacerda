import { useHistory, useParams } from "react-router-dom";

import { Usuarios } from "../Usuarios";

function Logado() {
  const { id } = useParams();

  const userId = parseInt(id);

  console.log(id + "id que aparece dentro do useParams");

  // console.log(useParams + "a function useParams");

  console.log(Usuarios);

  // const chave = localStorage.getItem("token");

  // const userId = parseInt(chave);

  // console.log(userId);

  const user = Usuarios.find((user) => user.id === userId);

  // console.log(Usuarios[0].id);

  console.log(user);

  const history = useHistory();

  return (
    <>
      <h1 key={id}>
        Seja bem vindo, {user && user.name}
        <div className="button">
          <button onClick={() => history.push("/")}>Voltar</button>
        </div>
      </h1>
    </>
  );
}

export default Logado;
