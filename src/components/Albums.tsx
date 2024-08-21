import { Link } from "react-router-dom";
import { useAlbums } from "../context/useAlbums";

const Albums = () => {
  const { albums } = useAlbums();

  return (
    <div>
      <h1 className="text-center mt-11 text-2xl">Альбоми</h1>
      <div className="">
        {albums.map((album: { id: number; title: string }) => (
          <div key={album.id} className="border-2 border-gray-400 m-2 p-2">
            <Link to={`/albums/${album.id}`}>
              <h3>{album.id}. {album.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
