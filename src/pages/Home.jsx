import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieService";

const Home = () => {
  return (
    <div>
      <Hero/>
      <MovieRow title="upcoming" url={endpoints.upcoming} />
      <MovieRow title="trending" url={endpoints.trending} />
      <MovieRow title="top rated" url={endpoints.topRated} />
      <MovieRow title="popular" url={endpoints.popular} />
    </div>
  );
};

export default Home;
