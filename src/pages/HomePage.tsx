import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import NFTCard from '@/components/NFTCard';
import Section from '@/templates/Section';
import {
  TRENDINGS,
  TOP_CREATORS,
  CATEGORIES,
  DISCOVERY,
  HIW,
} from '@/constants/homepage';
import JoinComponent from '@/components/JoinComponent';

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

const ButtonRanking = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Button variant="outline" className="w-full">
        <img src="/icon_outline/RocketLaunchPurple.svg" className="mr-2" />
        View Rankings
      </Button>
    </div>
  );
};

const ButtonSeeAll = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <Button variant="outline" className="w-full">
        <img src="/icon_outline/Eye.svg" className="mr-2" />
        See All
      </Button>
    </div>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:flex items-center justify-center bg-primary-darken text-neutral flex flex-col">
      {/* discover section */}
      <Section className="flex flex-col sm:flex-row">
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
            avatar="/artists/top_artists/AnimaKid.svg"
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
      <Section className="flex flex-col">
        <div className="flex-1 header w-full flex justify-between">
          <div>
            <h2 className="text-headline-size">Top Creators</h2>
            <p className="text-subheadline-size">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <ButtonRanking className="hidden sm:block" />
        </div>
        <div className="flex-1 creators-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <ButtonRanking className="flex-1 block sm:hidden" />
      </Section>

      {/* categories */}
      <Section className="flex-col">
        <div className="header w-full flex justify-between">
          <div>
            <h2 className="text-headline-size">Browse Categories</h2>
          </div>
        </div>
        <div className="categories-wrapper grid grid-cols-2 sm:grid-cols-4 gap-8">
          {CATEGORIES.map((category) => (
            <NFTCard
              key={category.id}
              image={category.image}
              title={category.title}
            />
          ))}
        </div>
      </Section>

      {/* discovery */}
      <Section className="flex flex-col w-full">
        <div className="header w-full flex justify-between">
          <div>
            <h2 className="text-headline-size">Discover More NFTs</h2>
            <p className="text-subheadline-size">Explore new trending NFTs</p>
          </div>
          <ButtonSeeAll className="hidden md:block" />
        </div>
        <div className="discovery-wrapper flex flex-col md:flex-row gap-8">
          {DISCOVERY.map((discovery) => (
            <div className="flex-1">
              <NFTCard
                key={discovery.id}
                image={discovery.image}
                title={discovery.title || ''}
                artist={discovery.artist?.name}
                avatar={discovery.artist?.avatar}
                withFooter={true}
              />
            </div>
          ))}
        </div>
        <ButtonSeeAll className="flex-1 block sm:hidden" />
      </Section>

      {/* rundown */}
      <Section className="!p-0">
        <img src="/NFT Highlight.svg" className="w-full" />
      </Section>

      {/* How it Work */}
      <Section className="flex-col">
        <div className="header w-full flex justify-between">
          <div>
            <h2 className="text-headline-size">How it works</h2>
            <p className="text-subheadline-size">Find out how to get started</p>
          </div>
        </div>
        <div className="categories-wrapper flex flex-col md:flex-row gap-8">
          {HIW.map((category) => (
            <div
              key={category.id}
              className="flex-1 bg-primary-lighten text-center p-6 rounded-xl"
            >
              <div className="flex flex-col items-center">
                <img src={category.image} />
                <p className="text-subheadline-size font-semibold">
                  {category.title}
                </p>
                <p className="text-normal-size">{category.subtitle} </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* join */}
      <Section>
        <div className="flex flex-col sm:flex-row bg-primary-lighten w-full p-16 rounded rounded-xl">
          <div className="flex-1">
            <img src="/Astronout.svg" className="w-full" />
          </div>
          <div className="flex-1 md:p-16">
            <JoinComponent />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
