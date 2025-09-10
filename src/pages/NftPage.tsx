import Button from '@/components/Button';
import Section from '@/templates/Section';
import SOCIAL_MEDIA from '@/constants/social_media';
import { useState } from 'react';
import { NFTS } from '@/constants/nft';
import NFTCard from '@/components/NFTCard';

const tags = ['Animation', 'illustration', 'moon', 'moon'];

const PlaceBid = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full bg-primary-lighten p-8 flex flex-col rounded rounded-2xl ${className}`}
    >
      <p className="text-body-size">Auction ends in:</p>
      <div className="flex justify-between gap-2">
        <div>
          <p className="text-headline-size">59</p>
          <p>Hours</p>
        </div>
        <p className="text-headline-size">:</p>
        <div>
          <p className="text-headline-size">59</p>
          <p>Minutes</p>
        </div>
        <p className="text-headline-size">:</p>
        <div>
          <p className="text-headline-size">59</p>
          <p>Seconds</p>
        </div>
      </div>
      <Button variant="secondary">Place Bid</Button>
    </div>
  );
};

const NftPage = () => {
  const [activeTab, setActiveTab] = useState('nfts');

  return (
    <div>
      <img src="/NFT page placeholder.svg" className="w-full" />
      <Section className="!pt-5 flex justify-between gap-8 !pb-0">
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h1 className="text-headline-size font-semibold">The Orbitians</h1>
            <p className="text-subheadline-size">Minted on Sep 30, 2022</p>
          </div>
          <PlaceBid className="block sm:hidden" />
          <div>
            <p>Created By</p>
            <div className="flex gap-2">
              <img
                src="/artists/top_artists/RustyRobot.svg"
                width={24}
                height={24}
              />
              <p className="font-semibold">Orbitian</p>
            </div>
          </div>
          <article aria-labelledby="orbitian-title">
            <h2 id="orbitian-title">The Orbitians</h2>

            <p>
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain.
            </p>

            <p>
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
            </p>

            <p>
              They live in metal space machines, high up in the sky and only
              have one foot on Earth. These Orbitians are a peaceful race, but
              they have been at war with a group of invaders for many
              generations.
            </p>

            <p>
              The invaders are called Upside-Downs, because of their inverted
              bodies that live on the ground, yet do not know any other way to
              be. Upside-Downs believe that they will be able to win this war if
              they could only get an eye into Orbitian territory, so they've
              taken to make human beings their target.
            </p>
          </article>
          <div>
            <p>Details</p>
            <span>View on Etherscan</span>
            <span>View Original</span>
          </div>
          <div>
            <p className="mb-2">Tags</p>
            <div className="flex flex-col md:flex-row gap-5">
              {tags.map((tag) => (
                <p className="rounded rounded-2xl bg-primary-lighten px-3 py-3">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end items-start">
          <PlaceBid className="hidden sm:block" />
        </div>
      </Section>

      <Section className="flex flex-col gap-16">
        {/* NFTS */}
        <div className="flex justify-between">
          <h2 className="text-headline-size font-semibold">
            More from this artist
          </h2>
          <Button variant="outline" className="hidden md:block">
            <img src="/icon_outline/ArrowRight.svg" />
            Go To Artist Page
          </Button>
        </div>
        <div className="flex-1 creators-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NFTS.map((nft) => (
            <NFTCard
              key={nft.id}
              image={nft.image}
              title={nft.title || ''}
              avatar={nft.artist?.avatar}
              artist={nft.artist?.name}
              withFooter
            />
          ))}
        </div>
        <Button variant="outline" className="block md:hidden">
          <img src="/icon_outline/ArrowRight.svg" />
          Go To Artist Page
        </Button>
      </Section>
    </div>
  );
};

export default NftPage;
