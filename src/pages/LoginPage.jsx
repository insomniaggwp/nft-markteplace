import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useInput from "../hooks/useInput";
import { login } from "../services/authService";

const LoginPage = () => {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isSuccessLogin = await login({ username, password })
    if (isSuccessLogin) {
      navigate("/dashboard");
    } else {
      alert('Wrong Username or Password')
    }
  };

  return (
    <div className="min-h-screen bg-primary w-full flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-neutral p-6 rounded shadow-elevation-3 w-96">
        <h2 className="text-headline-size font-bold text-primary mb-4">Login</h2>
        <InputField
          label="Username"
          id="username"
          value={username}
          onChange={onUsernameChange}
          placeholder="Enter your username"
        />

        <InputField
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Enter your password"
        />

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
