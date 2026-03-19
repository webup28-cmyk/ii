export interface PanelData {
  id: string;
  type: 'image' | 'center';
  imageUrl?: string;
  letter?: string;
  label: string;
  title: string;
  subtitle: string;
}

export const PANELS: PanelData[] = [
  {
    id: '1',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?auto=format&fit=crop&q=80&w=600&h=1200',
    label: 'EXPLORE SCORE & LYRICS',
    title: 'The Little Mermaid',
    subtitle: 'Part of Your World',
  },
  {
    id: '2',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=600&h=1200',
    label: 'BEHIND THE SCENES',
    title: 'Beauty and the Beast',
    subtitle: 'Be Our Guest',
  },
  {
    id: 'center',
    type: 'center',
    letter: 'Z',
    label: 'EXPLORE SONG & EXTRA MATERIAL',
    title: 'HERCULES',
    subtitle: 'Song: Go the Distance',
  },
  {
    id: '3',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&q=80&w=600&h=1200',
    label: 'ARCHIVAL RECORDINGS',
    title: 'Aladdin',
    subtitle: 'A Whole New World',
  },
  {
    id: '4',
    type: 'image',
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=600&h=1200',
    label: 'MUSICAL COMPOSITION',
    title: 'Pocahontas',
    subtitle: 'Colors of the Wind',
  },
];
