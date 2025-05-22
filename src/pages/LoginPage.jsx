import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import useInput from "../hooks/useInput";

const LoginPage = () => {
  const [username, onUsernameChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "administrator1x" && password === "1xpassword") {
      localStorage.setItem("auth", JSON.stringify({ isLogin: true, username }));
      navigate("/dashboard");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
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
