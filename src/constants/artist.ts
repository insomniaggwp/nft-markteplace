export interface NFT {
  id: number;
  title?: string;
  image: string;
  artist?: Artist
}

export interface Artist {
  id: number;
  name: string;
  avatar?: string;
}

const ARTISTS: Artist[] = [
  {
    id: 1,
    name: 'Jaydon Ekstrom Bothman',
    avatar: '/artists/artist1.svg'
  },
  {
    id: 2,
    name: 'Ruben Carder',
    avatar: '/artists/artist2.svg'
  },
  {
    id: 3,
    name: 'Alfredo Septimus',
    avatar: '/artists/artist3.svg'
  },
  {
    id: 4,
    name: 'Davis Franci',
    avatar: '/artists/artist4.svg'
  },
  {
    id: 5,
    name: 'Livia Rosser',
    avatar: '/artists/artist5.svg'
  },
  {
    id: 6,
    name: 'Kianna Donin',
    avatar: '/artists/artist6.svg'
  },
  {
    id: 7,
    name: 'Phillip Lipshutz',
    avatar: '/artists/artist7.svg'
  },
  {
    id: 8,
    name: 'Maria Rosser',
    avatar: '/artists/artist8.svg'
  },
  {
    id: 9,
    name: 'Kianna Stanton',
    avatar: '/artists/artist9.svg'
  },
  {
    id: 10,
    name: 'Angel Lubin',
    avatar: '/artists/artist10.svg'
  },
  {
    id: 11,
    name: 'Allison Torff',
    avatar: '/artists/artist11.svg'
  },
  {
    id: 12,
    name: 'Davis Workman',
    avatar: '/artists/artist12.svg'
  },
  {
    id: 13,
    name: 'Lindsey Lipshutz',
    avatar: '/artists/artist13.svg'
  },
  {
    id: 14,
    name: 'Randy Carder',
    avatar: '/artists/artist14.svg'
  },
  {
    id: 15,
    name: 'Lydia Culhane',
    avatar: '/artists/artist15.svg'
  },
  {
    id: 16,
    name: 'Rayna Bator',
    avatar: '/artists/artist16.svg'
  },
  {
    id: 17,
    name: 'Jocelyn Westervelt',
    avatar: '/artists/artist17.svg'
  },
  {
    id: 18,
    name: 'Marilyn Torff',
    avatar: '/artists/artist18.svg'
  },
  {
    id: 19,
    name: 'Skylar Levin',
    avatar: '/artists/artist19.svg'
  },
  {
    id: 20,
    name: 'Terry Dorwart',
    avatar: '/artists/artist20.svg'
  }
]

export { ARTISTS }