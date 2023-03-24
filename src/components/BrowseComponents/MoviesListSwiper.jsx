import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, FreeMode, Zoom } from "swiper";
import { movies as moviesList } from "../../utils/movies-dummy-data";
import "swiper/css";
// import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/zoom";
import { useMemo, useState } from "react";
// import "../../pages/Browse.scss";
import "./MoviesListSwiper.scss";
import { top10s } from "./Top10Svgs";
import MoreInfo from "./MoreInfo";

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="pageNum ' + className + '"></span>';
  },
};

const MoviesListSwiper = ({ continueWatching, top10, title }) => {
  const [movies, setMovies] = useState(
    top10 ? moviesList.slice(0, 10) : moviesList
  );
  const [timer, setTimer] = useState();

  const MouseOverVideoHandler = (event) => {
    const timeOut = setTimeout(() => {
      event.target.play();
    }, 400);

    setTimer(timeOut);
    timeOut();
  };
  const MouseLeaveVideoHandler = (event) => {
    event.target.currentTime = 0;
    event.target.load();

    clearTimeout(timer);
    setTimer(null);
  };
  return (
    <div className="moviesListSwiper">
      <h2 className="movieListTitle">{title}</h2>
      <Swiper
        autoHeight={true}
        freeMode={true}
        pagination={pagination}
        slidesPerView={2.6}
        slidesPerGroup={2}
        spaceBetween={20}
        // loop={true}
        breakpoints={{
          "@0.50": {
            slidesPerGroup: 1,
            slidesPerView: 1.8,
          },
          "@0.75": {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
          },
          "@1.00": {
            slidesPerView: 3.8,
            slidesPerGroup: 3,
          },
          "@1.50": {
            slidesPerView: 4.8,
            slidesPerGroup: 4,
          },
          "@2.00": {
            slidesPerView: 5.8,
            slidesPerGroup: 5,
          },
          "@2.50": {
            slidesPerView: 6.8,
            slidesPerGroup: 6,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation, Pagination, FreeMode]}
        className="mySwiper"
        centerInsufficientSlides
      >
        {movies &&
          movies.map((movie, index) => {
            return (
              <SwiperSlide className="movieItem">
                <div className="movieItemWrapper" key={index}>
                  <div
                    className={top10 ? "top10 videoWrapper" : "videoWrapper"}
                  >
                    {top10 && index < 10 && top10s[index]}

                    <video
                      className={top10 ? "top10" : ""}
                      onMouseOver={MouseOverVideoHandler}
                      onMouseLeave={MouseLeaveVideoHandler}
                      muted
                      poster={`movies/${movie.img}`}
                    >
                      <source src="video2.m4v"></source>
                    </video>
                  </div>
                  <div className="moreInfoContainer">
                    <MoreInfo continueWatching={continueWatching} />
                    {continueWatching && (
                      <div className="progressBar">
                        <div
                          style={{
                            width: "30%",
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        {/* <span className="containerStart" slot="container-start"></span>
        <span className="containerEnd" slot="container-end"></span> */}
        <span className="wrapperStart" slot="wrapper-start"></span>
        {/* <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </div>
  );
};

export default MoviesListSwiper;
