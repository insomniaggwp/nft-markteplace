import InputField from '@/components/InputField';
import useInput from '@/hooks/useInput';
import Section from '@/templates/Section';
import { useState } from 'react';
import { NFTS } from '@/constants/marketplace';
import NFTCard from '@/components/NFTCard';

interface Tab {
  label: string;
  count: number;
  value: string;
}

const tabs: Tab[] = [
  { label: 'NFTs', count: 302, value: 'nfts' },
  { label: 'Collections', count: 67, value: 'collections' },
];

const MarketplacePage = () => {
  const [searchNft, onSearchNft] = useInput('');
  const [activeTab, setActiveTab] = useState('nfts');

  return (
    <div className="w-full md:flex items-center justify-center bg-primary-darken text-neutral flex flex-col">
      <Section className="flex-col">
        <div className="header w-full flex flex-col justify-between">
          <h2 className="text-headline-size text-semibold">
            Browse Marketplace
          </h2>
          <p className="text-subheadline-size">
            Browse through more than 50k NFTs on the NFT Marketplace.
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

export default MarketplacePage;
