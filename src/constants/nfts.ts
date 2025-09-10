export interface NFT {
  id: number;
  title?: string;
  image: string;
  artist?: Artist;
}

export interface Artist {
  id: number;
  name: string;
  avatar?: string;
  nfts?: NFT[];
}

const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'Animakid',
    nfts: [
      {
        id: 1,
        title: 'Space Walking',
        image: '/nfts/space_walking.svg'
      }
    ]
  }
]

export default {
  ARTISTS
}