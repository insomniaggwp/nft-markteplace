import InputField from '@/components/InputField';
import useInput from '@/hooks/useInput';
import Section from '@/templates/Section';
import { useState } from 'react';
import { ARTISTS } from '@/constants/artist';
import { useNavigate } from 'react-router-dom';

interface Tab {
  label: string;
  value: string;
}

const tabs: Tab[] = [
  { label: 'Today', value: 'today' },
  { label: 'This Week', value: 'week' },
  { label: 'This Month', value: 'month' },
  { label: 'All time', value: 'all' },
];

const RankingsPage = () => {
  const [searchNft, onSearchNft] = useInput('');
  const [activeTab, setActiveTab] = useState('nfts');

  const navigate = useNavigate();

  return (
    <div className="w-full md:flex items-center justify-center bg-primary-darken text-neutral flex flex-col">
      <Section className="flex-col !pb-5">
        <div className="header w-full flex flex-col justify-between">
          <h2 className="text-headline-size font-semibold">Top Creators</h2>
          <p className="text-subheadline-size">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
          <InputField
            id="username"
            value={searchNft}
            onChange={onSearchNft}
            placeholder="Search your favourite NFTs"
            className="mt-8 bg-transparent"
          />
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
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </Section>
      <Section className="!pt-0">
        {/* NFTS */}
        <div className="artists-wrapper flex flex-col gap-5">
          <div className="flex border border-primary-lighten justify-start items-center py-3 px-5 gap-4 rounded-2xl min-h-[60px]">
            <p className="flex items-center justify-center bg-none lg:bg-primary-darken rounded-2xl w-8 h-8">
              #
            </p>
            <p className="flex-2 text-normal-size">Artist</p>
            <p className="flex-1 text-normal-size hidden sm:block">Change</p>
            <p className="flex-1 text-normal-size hidden lg:block">NFTs Sold</p>
            <p className="flex-1 text-normal-size">Volume</p>
          </div>
          {ARTISTS.map((artist) => (
            <div className="bg-primary-lighten flex justify-start items-center py-3 px-5 gap-4 rounded-2xl min-h-[60px]">
              <p className="flex items-center justify-center bg-none lg:bg-primary-darken rounded-2xl w-8 h-8">
                {artist.id}
              </p>
              <img
                src={artist.avatar}
                width={60}
                height={60}
                onClick={() => navigate(`/artist`)}
              />
              <p className="flex-2 text-body-size sm:text-normal-size font-semibold">
                {artist.name}
              </p>
              <p className="flex-1 text-normal-size text-success hidden sm:block">
                +1.41
              </p>
              <p className="flex-1 hidden lg:block">602</p>
              <p className="flex-1">12.4 ETH</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default RankingsPage;
