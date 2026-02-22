export interface Service {
  id: string;
  name: string;
  sectionId: string;
}

export const services: Service[] = [
  { id: 'podcast', name: 'Podcast', sectionId: 'podcast' },
  { id: 'music-videos', name: 'Music Videos', sectionId: 'music-videos' },
  { id: 'corporate-movies', name: 'Corporate Movies', sectionId: 'corporate-movies' },
  { id: 'films', name: 'Films', sectionId: 'films' },
  { id: 'tv-dramas', name: 'TV Dramas', sectionId: 'tv-dramas' },
  { id: 'tv-commercials', name: 'TV Commercials', sectionId: 'tv-commercials' },
  { id: 'press-conference', name: 'Press Conference', sectionId: 'press-conference' },
  { id: 'biography', name: 'Biography', sectionId: 'biography' },
  { id: 'movie-premier', name: 'Movie Premier', sectionId: 'movie-premier' },
  { id: 'post-production', name: 'Post Production', sectionId: 'post-production' },
  { id: 'promotional-videos', name: 'Promotional Videos', sectionId: 'promotional-videos' },
  { id: 'event-coverage', name: 'Event Coverage', sectionId: 'event-coverage' },
];

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};
