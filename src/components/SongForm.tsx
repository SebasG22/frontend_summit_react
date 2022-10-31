import { useEffect, useState } from "react";
import {
  useCreateSongMutation,
  useReduceAlbumsQuery,
} from "../generated/generated";

export const SongForm = () => {
  const { data } = useReduceAlbumsQuery();
  const [name, setName] = useState("");
  const [albumId, setAlbumId] = useState<number>(0);

  const [addSongMutation, mutationResult] = useCreateSongMutation({
    variables: { name, albumId },
  });

  useEffect(() => {
    const defaultValue = data?.allAlbums[0].id;
    if (defaultValue) {
      setAlbumId(+defaultValue);
    }
  }, [data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addSongMutation();
    console.warn({ name, albumId });
    setName("");
    setAlbumId(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Name </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <label htmlFor="albumId"> Album Id</label>
      <select
        name="albumId"
        onChange={(event) => setAlbumId(+event.target.value)}
      >
        {data?.allAlbums.map((album) => (
          <option key={album.id} value={album.id}>
            {" "}
            {album.name}
          </option>
        ))}
      </select>
      <br />
      <button>Create new Song</button>
    </form>
  );
};
