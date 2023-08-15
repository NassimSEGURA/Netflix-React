import movies from "../assets/movies.json";

const Section = () => {
  return (
    <main>
      {movies.map((movie) => (
        <div className="container" key={movie.category}>
          <h2 className="title">{movie.category}</h2>
          <div className="movies-list">
            {movie.images.map((image, i) => (
              <img key={i} src={image} alt="" />
            ))}
          </div>
        </div>
      ))}
      ;
    </main>
  );
};

export default Section;
