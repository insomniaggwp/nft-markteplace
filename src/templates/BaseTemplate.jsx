import Button from '../components/Button';
import { logout } from '../services/authService';

const BaseTemplate = ({ children }) => {
  const handleLogout = async () => {
    try {
      const isSuccessLogout = await logout();
      if (isSuccessLogout) {
        window.location.href = '/';
        alert('Logout successful.');
      } else {
        throw new Error('Logout Failed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <header className="bg-primary text-neutral py-[20px] px-[50px] mb-4">
        <nav className="flex justify-between items-center">
          {/* Logo / Judul */}
          <h1 className="text-normal-size font-bold">NFT Marketplace</h1>

          {/* Menu */}
          <ul className="flex items-center gap-8">
            <li>
              <a href="/marketplace" className="hover:underline">
                Marketplace
              </a>
            </li>
            <li>
              <a href="/rankings" className="hover:underline">
                Rankings
              </a>
            </li>
            <li>
              <a href="/connect" className="hover:underline">
                Connect a Wallet
              </a>
            </li>
            <li>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="max-w-screen-xl mx-auto px-4">{children}</div>
    </>
  );
};

export default BaseTemplate;
