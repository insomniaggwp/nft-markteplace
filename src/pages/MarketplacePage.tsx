import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { login } from '../services/authService';
import NFTCard from '@/components/NFTCard';

const GetStarted = ({ className }: { className?: string }) => {
  return (
    <div className={`footer flex flex-col ${className}`}>
      <Button variant="secondary" className="md:w-1/3 my-8">
        <img
          src="/icon_outline/RocketLaunch.svg"
          width={20}
          height={20}
          className="mr-2"
        />
        Get Started
      </Button>
      <div className="flex gap-8">
        <div className="flex-1">
          <p className="text-title-size font-bold">240k+</p>
          <p className="text-subtitle-size">Total Sale</p>
        </div>
        <div className="flex-1">
          <p className="text-title-size font-bold">100k+</p>
          <p className="text-subtitle-size">Auctions</p>
        </div>
        <div className="flex-1">
          <p className="text-title-size font-bold">240k+</p>
          <p className="text-subtitle-size">Artists</p>
        </div>
      </div>
    </div>
  );
};

const MarketplacePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:flex items-center justify-center bg-primary-darken text-neutral flex flex-col">
      {/* discover section */}
      <div className="flex-1 md:flex gap-8 md:px-[115px] md:py-[80px] p-8">
        <div className="flex-1 flex flex-col">
          <div className="header">
            <h1 className="text-display-size font-semibold leading-[70px] mb-5">
              Discover digital art & Collect NFTs
            </h1>
            <h3 className="text-subheadline-size">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h3>
          </div>
          <GetStarted className="hidden md:block" />
        </div>
        <div className="flex-1 w-full h-full">
          <NFTCard
            image="/nfts/space_walking.svg"
            title="Space Walking"
            avatar="/artists/AnimaKid.svg"
            artist="AnimaKid"
          />
        </div>
        <GetStarted className="md:hidden" />
      </div>

      {/* trending section */}
    </div>
  );
};

export default MarketplacePage;
