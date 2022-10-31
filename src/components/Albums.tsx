import { useAlbumsLazyQuery, useAlbumsQuery } from "../generated/generated";

export const Albums = () => {
  const [getAlbums, { loading, data, error }] = useAlbumsLazyQuery();
  
  const handleRetrieveClick = () => {
    getAlbums();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <>
      <h1>Albums</h1>
      <button onClick={handleRetrieveClick}>Retrieve</button>
      <ul>
        {data?.allAlbums.map(({ id, name, year }) => (
          <li key={id}>
            { year } - <strong>{name}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};
