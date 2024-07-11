import "./styles.css";
import { useState } from "react";
import { LoginUser } from "./components/api";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await LoginUser(name, password);
      setSuccess(res);
    } catch (error) {
      setError(error.error);
    } finally {
      setPending(false);
    }
    setName("");
    setPassword("");
  };
  console.log(success);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>username:</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={pending}>
          Go
        </button>
      </form>
      {pending && <>Loading...</>}
      {success && <p>login : {success.email}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
