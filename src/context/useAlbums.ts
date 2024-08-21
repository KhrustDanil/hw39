import { useContext } from "react";
import { AlbumsContext } from "./AlbumsContext";

export const useAlbums = () => {
  const context = useContext(AlbumsContext);
  if (!context) {
    throw new Error("ERROR!!!");
  }
  return context;
};
