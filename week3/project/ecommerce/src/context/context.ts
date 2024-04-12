import { createContext } from 'react';

type FavoritesContextType = {
  favorites: number[];
  setFavorites: (value: number[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  setFavorites: () => {},
});
