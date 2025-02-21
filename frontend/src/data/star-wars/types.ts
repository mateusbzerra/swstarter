export interface StarWarsPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  films: string[];
  url: string;
  birth_year: string;
  gender: string;
  eye_color: string;
}

export interface StarWarsFilm {
  title: string;
  characters: string[];
  url: string;
  opening_crawl: string;
}

export type SearchType = "people" | "films";

export interface SearchRequestProps {
  searchTerm: string;
  searchType: SearchType;
}
