import { createContext } from "react";
import { AlbumsContextType } from "./types";

export const AlbumsContext = createContext<AlbumsContextType | null>(null);
