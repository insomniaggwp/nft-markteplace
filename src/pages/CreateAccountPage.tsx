import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useInput from '../hooks/useInput';
import { login } from '../services/authService';

const CreateAccountPage = () => {
  const [username, onUsernameChange] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPassword] = useInput('');

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isSuccessLogin = await login({ username, password });
    if (isSuccessLogin) {
      navigate('/dashboard');
    } else {
      alert('Wrong Username or Password');
    }
  };

  return (
    <div className="w-full md:flex items-center justify-center bg-primary-darken text-neutral">
      <div className="flex-1 w-full h-full">
        <img
          src="/Image Placeholder.svg"
          alt="Image Placeholder"
          className="w-full h-full"
        />
      </div>
      <div className="flex-1">
        <form onSubmit={handleLogin} className="p-10 flex flex-col gap-8">
          <div className="max-w-[460px] flex flex-col gap-5">
            <h1 className="text-headline-size font-bold">Create account</h1>
            <h2>
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </h2>
          </div>

          <div className="max-w-[330px]">
            <InputField
              id="username"
              value={username}
              onChange={onUsernameChange}
              placeholder="Username"
            />

            <InputField
              id="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
              placeholder="Email Address"
            />

            <InputField
              id="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Password"
            />

            <InputField
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={onConfirmPassword}
              placeholder="Confirm Password"
            />

            <Button type="submit" variant="secondary" className="w-full">
              Create account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
