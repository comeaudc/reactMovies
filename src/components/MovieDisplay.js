export default function MovieDisplay({ movie }) {
  const loaded = () => {
    const { Title, Genre, Poster, Year } = movie;

    return (
      <>
        <h1>{Title}</h1>
        <h2>{Genre}</h2>
        <img src={Poster} alt={Title} />
        <h2>{Year}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Movie To Display</h1>;
  };

  return movie ? loaded() : loading();
}
