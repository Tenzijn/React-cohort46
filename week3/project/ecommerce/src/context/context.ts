import { createContext } from 'react';

type FavoritesContextType = {
  favorites: number[];
  action: (value: number[]) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  action: () => {},
});
