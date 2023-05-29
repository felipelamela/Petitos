import React from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState(``);

  return (
    <section>
      <h1>Login</h1>

      <form>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>

      <Link to="/login/register">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
