import { ReactNode } from 'react';
import Button from '@/components/Button';
import NAVIGATION from '@/constants/navigation';
import SOCIAL_MEDIA from '@/constants/social_media';
import { useNavigate } from 'react-router-dom';

interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  const navigate = useNavigate();
  const onSignUp = () => {
    navigate(`/create-account`);
  };

  return (
    <>
      {/* header */}
      <header className="bg-primary text-neutral py-[20px] px-[50px]">
        <nav className="flex justify-between items-center gap-4">
          {/* Logo / Judul */}
          <button
            className="hover:cursor-pointer"
            onClick={() => navigate(`/`)}
          >
            <img src="/icon_outline/Logo.svg" alt="Logo" />
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {NAVIGATION.map((navigation) => (
              <li key={navigation.id}>
                <a
                  href={navigation.route}
                  className="hover:underline whitespace-nowrap overflow-hidden"
                >
                  {navigation.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="tertiary" onClick={onSignUp}>
                <img
                  src="/icon_outline/user.svg"
                  alt="User"
                  className="text-purple-500 fill-current mr-2"
                  width={20}
                  height={20}
                />
                <span className="whitespace-nowrap overflow-hidden">
                  Sign Up
                </span>
              </Button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button className="md:hidden cursor-pointer">
            <img src="/icon_outline/burger_menu.svg" alt="Menu" />
          </button>
        </nav>
      </header>

      {/* content */}
      <div
        id="content"
        className="max-w-screen-xl mx-auto bg-primary-darken text-neutral"
      >
        {children}
      </div>

      <footer className="bg-primary text-neutral py-8 px-12">
        <div className="max-w-[980px] m-auto flex flex-col md:flex-row justify-between gap-5">
          {/* Kolom 1 */}
          <div className="flex-1 flex flex-col gap-6">
            <button className="cursor-pointer">
              <img src="/icon_outline/Logo.svg" alt="Logo" />
            </button>
            <div className="flex flex-col gap-5">
              <p>NFT marketplace UI created with Anima for Figma.</p>
              <div className="flex flex-col gap-4">
                <p>Join our community</p>
                <div className="flex gap-2 cursor-pointer">
                  {SOCIAL_MEDIA.map((social) => (
                    <img
                      src={`/icon_social_media/${social.icon}`}
                      alt="Social Media"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="flex-[0.7] flex flex-col gap-6">
            <h2 className="font-bold text-subheadline-size">Explore</h2>
            <ul className="flex flex-col gap-5">
              {NAVIGATION.map((navigation) => (
                <li key={navigation.id}>
                  <a href={navigation.route} className="cursor-pointer">
                    {navigation.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 */}
          <div className="flex-[1.2] flex flex-col gap-6">
            <h2 className="font-bold text-subheadline-size">
              Join our weekly digest
            </h2>
            <p className="text-sm">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div id="emailContainer" className="flex w-full">
              <input
                id="inputEmail"
                placeholder="Enter your email here"
                className="h-[60px] w-full rounded rounded-3xl bg-white text-primary-darken px-6"
              />
              <Button variant="secondary" className="relative -ml-10 w-[180px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-[1050px] text-button-size m-auto mt-8">
          <hr className="text-[#858584]" />
          <p className="text-button-size mt-6">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </footer>
    </>
  );
};

export default BaseTemplate;
