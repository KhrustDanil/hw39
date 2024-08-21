import { useState, useEffect } from "react";
import { AlbumsContext } from "./AlbumsContext";

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsProviderProps {
  children: JSX.Element;
}

export const AlbumsProvider = ({ children }: AlbumsProviderProps) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <AlbumsContext.Provider value={{ albums }}>
      {children}
    </AlbumsContext.Provider>
  );
};
