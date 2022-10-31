import { useSongsQuery } from "../generated/generated";

export const Songs = () => {
  const { loading, error, data } = useSongsQuery();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Songs</h1>
      <ul>
        {data?.allSongs.map(({ id, name,album }) => (
          <li key={id}>
            {id} - <strong>{name}</strong> {album.name}
          </li>
        ))}
      </ul>
    </>
  );
};
