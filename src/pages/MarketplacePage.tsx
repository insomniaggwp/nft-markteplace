import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { login } from '../services/authService';
import NFTCard from '@/components/NFTCard';
import Section from '@/templates/Section';
import { TRENDINGS, TOP_CREATORS } from '@/constants/homepage';

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
      <Section>
        <div className="flex-1 flex flex-col">
          <div className="header">
            <h2 className="text-display-size font-semibold leading-[70px] mb-5">
              Discover digital art & Collect NFTs
            </h2>
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
      </Section>

      {/* trending section */}
      <Section className="flex-col">
        <div>
          <h2 className="text-headline-size">Trending Collection</h2>
          <p className="text-subheadline-size">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div id="imageSection" className="flex flex-wrap gap-8">
          {TRENDINGS.map((trending, index) => (
            <div
              key={trending.id}
              className={`nfts-wrapper flex-1 flex flex-col gap-2
                ${index === 2 ? 'hidden lg:flex' : ''}
                ${index === 1 ? 'hidden md:flex' : ''} `}
            >
              <div className="preview">
                <img src={trending.preview} className="w-full" />
              </div>
              <div className="content flex gap-2">
                {trending.nfts.map((nft) => (
                  <img src={nft.image} className="w-full" />
                ))}
                <div className="bg-primary-purple font-bold w-full h-full rounded-3xl text-white flex items-center justify-center h-20">
                  1025+
                </div>
              </div>
              <div className="footer">
                <p className="text-subheadline-size font-semibold">
                  {trending.category}
                </p>
                <div className="flex gap-2 mt-2">
                  <img src={trending.artist.avatar} width={24} height={24} />
                  <p>{trending.artist.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* top creators */}
      <Section className="flex-col">
        <div className="header w-full flex justify-between">
          <div>
            <h2 className="text-headline-size">Top Creators</h2>
            <p className="text-subheadline-size">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div>
            <Button variant="secondary">View Rankings</Button>
          </div>
        </div>
        <div className="creators-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOP_CREATORS.map((creator) => (
            <div
              key={creator.id}
              className="relative bg-primary-lighten flex lg:flex-col text-center items-center p-6 gap-5 rounded-xl lg:min-w-[240px] lg:min-h-[240px]"
            >
              <p className="absolute left-3 top-3 flex items-center justify-center bg-primary-darken rounded-2xl w-8 h-8">
                {creator.id}
              </p>
              <img src={creator.avatar} width={120} height={120} />
              <div>
                <p className="text-subheadline-size font-semibold">
                  {creator.name}
                </p>
                <p className="text-normal-size">
                  Total Sales: <span className="font-semibold">34.53 ETH</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MarketplacePage;
