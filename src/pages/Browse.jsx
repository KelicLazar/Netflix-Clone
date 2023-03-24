import MoviesListSwiper from "../components/BrowseComponents/MoviesListSwiper";
import VideoBanner from "../components/BrowseComponents/VideoBanner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Browse = () => {
  return (
    <>
      {/* <VideoBanner /> */}

      <div className="moviesList">
        {/* <MoviesListSwiper continueWatching />
        <MoviesListSwiper top10 />
        <MoviesListSwiper />
        <MoviesListSwiper /> */}
        <MoviesListSwiper title="Continue watching" continueWatching={true} />
        <MoviesListSwiper
          title="Top 10 movies today: Serbia"
          top10
          continueWatching={false}
        />
        <MoviesListSwiper title="Popular on Netflix" continueWatching={false} />
        <MoviesListSwiper title="Only on Netflix" continueWatching={false} />
        <MoviesListSwiper
          title="Top 10 series today: Serbia"
          top10
          continueWatching={false}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer browse />
    </>
  );
};

export default Browse;
