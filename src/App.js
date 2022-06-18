import "./App.css";
//  import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";

import { GlobalStyle } from "./components/GlobalStyle";
import { SucessoCadastro } from "./components/login/style";

import Logado from "./components/login";
// import { useEffect } from "react";

function App() {
  //  const [isLogged, setIsLogged] = useState(false);
  //  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Register />
            {/* <Link to="/login/:1">
              <button>Teste</button>
            </Link> */}
          </Route>
          <Route exact path="/login/:id">
            <SucessoCadastro>
              <Logado />
            </SucessoCadastro>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
