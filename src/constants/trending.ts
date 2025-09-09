import { NFT, Artist } from "./nfts";

interface Trending {
  id: number;
  artist: Artist;
  preview: string;
  category: string;
  nfts: NFT[];
}

const TRENDINGS: Trending[] = [
  {
    id: 1,
    artist: {
      id: 1,
      name: 'MrFox',
      avatar: '/artists/mrfox.svg'
    },
    preview: '/nfts/animal1.svg',
    category: 'DSGN Animals',
    nfts: [
      {
        id: 1,
        image: '/nfts/animal2.svg'
      },
      {
        id: 2,
        image: '/nfts/animal3.svg'
      }
    ]
  },
  {
    id: 2,
    artist: {
      id: 1,
      name: 'Shroomie',
      avatar: '/artists/shroomie.svg'
    },
    preview: '/nfts/plant1.svg',
    category: 'Magic Mushrooms',
    nfts: [
      {
        id: 1,
        image: '/nfts/plant2.svg'
      },
      {
        id: 2,
        image: '/nfts/plant3.svg'
      }
    ]
  },
  {
    id: 2,
    artist: {
      id: 1,
      name: 'BeKind2Robots',
      avatar: '/artists/bekind2robots.svg'
    },
    preview: '/nfts/robot1.svg',
    category: 'Disco Machines',
    nfts: [
      {
        id: 1,
        image: '/nfts/robot2.svg'
      },
      {
        id: 2,
        image: '/nfts/robot3.svg'
      }
    ]
  }
]

export default TRENDINGS;