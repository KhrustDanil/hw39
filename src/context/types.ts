export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumsContextType {
  albums: Album[];
}
