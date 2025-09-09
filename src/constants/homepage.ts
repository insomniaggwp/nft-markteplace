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
      avatar: '/artists/Shroomie.svg'
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
];

const TOP_CREATORS: Artist[] = [
  {
    id: 1,
    name: 'Keepitreal',
    avatar: '/artists/keepitreal.svg'
  },
  {
    id: 2,
    name: 'DigiLab',
    avatar: '/artists/DigiLab.svg'
  },
  {
    id: 3,
    name: 'GravityOne',
    avatar: '/artists/GravityOne.svg'
  },
  {
    id: 4,
    name: 'Juanie',
    avatar: '/artists/Juanie.svg'
  },
  {
    id: 5,
    name: 'BlueWhale',
    avatar: '/artists/BlueWhale.svg'
  },
  {
    id: 6,
    name: 'mr fox',
    avatar: '/artists/mrfox.svg'
  },
  {
    id: 7,
    name: 'Shroomie',
    avatar: '/artists/Shroomie.svg'
  },
  {
    id: 8,
    name: 'Robotica',
    avatar: '/artists/Robotica.svg'
  },
  {
    id: 9,
    name: 'RustyRobot',
    avatar: '/artists/RustyRobot.svg'
  },
  {
    id: 10,
    name: 'AnimaKid',
    avatar: '/artists/AnimaKid.svg'
  },
  {
    id: 11,
    name: 'Dotgu',
    avatar: '/artists/Dotgu.svg'
  },
  {
    id: 12,
    name: 'Ghiblier',
    avatar: '/artists/Ghiblier.svg'
  },
]

export { TOP_CREATORS, TRENDINGS };