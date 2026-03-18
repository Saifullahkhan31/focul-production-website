export interface PortfolioItem {
  title: string;
  label?: string;
  videoSrc: string;
  posterSrc?: string;
}

export const portfolio: Record<string, PortfolioItem[]> = {
  'music-videos': [
    {
      title: 'Khayal Rakhna',
      label: 'Music Video',
      videoSrc: '/media/portfolio/music-videos/khayal-rakhna.mp4',
      posterSrc: '/media/portfolio/music-videos/posters/khayal-rakhna.png',
    },
    {
      title: 'Rabba Mayray Ya',
      label: 'Music Video',
      videoSrc: '/media/portfolio/music-videos/Rabba-Mayray-Ya-by-Salman-Muneer.mp4',
      // posterSrc: '/media/portfolio/music-videos/posters/rabba-mayray-ya.png',
    },
  ],
};
