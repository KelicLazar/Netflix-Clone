import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, FreeMode } from "swiper";
import { movies as moviesList } from "../../utils/movies-dummy-data";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const MoviesListSwiper = () => {
  const [movies, setMovies] = useState(moviesList);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="pageNum ' + className + '"></span>';
    },
  };
  return (
    <div className="moviesListSwiper">
      <h2 className="movieListTitle">Continue Watching</h2>
      <Swiper
        grabCursor={true}
        freeMode={true}
        pagination={pagination}
        // cssMode={true}
        spaceBetween={20}
        slidesPerView={7.4}
        slidesPerGroup={6}
        // centeredSlidesBounds
        centeredSlides
        loop={true}
        keyboard={{
          enabled: true,
        }}
        // breakpoints={{
        //   769: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        // }}
        navigation={true}
        modules={[Keyboard, Navigation, Pagination, FreeMode]}
        className="mySwiper"
      >
        {movies &&
          movies.map((movie, index) => {
            console.log("movie", movie);
            return (
              <SwiperSlide className="movieItem">
                <div style={{ zIndex: 99, background: "blue" }}>
                  {({ isActive }) => (
                    <div>
                      Current slide is {isActive ? "active" : "not active"}
                    </div>
                  )}
                  {({ isNext }) => (
                    <div>
                      Current slide is {isNext ? "active" : "not active"}
                    </div>
                  )}
                  {({ isPrev }) => (
                    <div>
                      Current slide is {isPrev ? "active" : "not active"}
                    </div>
                  )}
                  {({ isVisible }) => (
                    <div>
                      Current slide is {isVisible ? "active" : "not active"}
                    </div>
                  )}
                </div>
                <div className="movieItemWrapper" key={index}>
                  <img src={`movies/${movie.img}`} alt={movie.title} />
                </div>
              </SwiperSlide>
            );
          })}
        <span className="containerStart" slot="container-start"></span>
        <span className="containerEnd" slot="container-end"></span>
        {/* <span slot="wrapper-start">Wrapper Start</span>
      <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </div>
  );
};

export default MoviesListSwiper;
