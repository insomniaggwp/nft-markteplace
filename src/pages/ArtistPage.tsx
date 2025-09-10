import Button from '@/components/Button';
import Section from '@/templates/Section';
import SOCIAL_MEDIA from '@/constants/social_media';
import { useState } from 'react';
import { NFTS } from '@/constants/nft';
import NFTCard from '@/components/NFTCard';

interface Tab {
  label: string;
  count: number;
  value: string;
}

const tabs: Tab[] = [
  { label: 'Created', count: 302, value: 'created' },
  { label: 'Owned', count: 67, value: 'owned' },
  { label: 'Collection', count: 4, value: 'collection' },
];

const ArtistPage = () => {
  const [activeTab, setActiveTab] = useState('nfts');

  return (
    <div>
      <img src="/artists/artistpage_cover.svg" className="w-full" />
      <Section className="!pt-5 flex flex-col gap-5 !pb-0">
        <div className="flex flex-col lg:flex-row justify-between">
          <h1 className="text-headline-size font-semibold">Animakid</h1>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button variant="secondary">
              <img src="/icon_outline/Copy.svg" />
              0xc0E3...B79C
            </Button>
            <Button variant="outline">
              <img src="/icon_outline/Plus.svg" />
              Follow
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div>
              <p className="text-title-size font-bold">240k+</p>
              <p className="text-subtitle-size">Total Sale</p>
            </div>
            <div>
              <p className="text-title-size font-bold">100k+</p>
              <p className="text-subtitle-size">Auctions</p>
            </div>
            <div>
              <p className="text-title-size font-bold">240k+</p>
              <p className="text-subtitle-size">Artists</p>
            </div>
          </div>

          <div>
            <p className="text-subtitle-size">Bio</p>
            <p className="text-subtitle-size">
              The internet's friendliest designer kid.
            </p>
          </div>

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

        <div className="flex space-x-6 w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex-1 relative flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors hover:cursor-pointer ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    isActive
                      ? 'bg-gray-600 text-white'
                      : 'bg-gray-800 text-gray-300'
                  }`}
                >
                  {tab.count}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </Section>

      <Section className="bg-primary-lighten">
        {/* NFTS */}
        <div className="flex-1 creators-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NFTS.map((nft) => (
            <NFTCard
              key={nft.id}
              image={nft.image}
              title={nft.title || ''}
              avatar={nft.artist?.avatar}
              artist={nft.artist?.name}
              className="!bg-primary-darken"
              withFooter
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ArtistPage;
