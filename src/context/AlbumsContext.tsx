import { createContext, useContext } from "react";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsContextType {
  albums: Album[];
}

export const AlbumsContext = createContext<AlbumsContextType | null>(null);

export const useAlbums = () => {
  const context = useContext(AlbumsContext);
  if (!context) {
    throw new Error("ERROR!!!");
  }
  return context;
};
