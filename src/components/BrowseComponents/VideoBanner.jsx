import "./VideoBanner.scss";

const VideoBanner = () => {
  return (
    <div className="videoContainer">
      <video width="100%" autoPlay loop muted>
        <source src="video2.m4v"></source>
      </video>
      <div className="gradient">
        <div className="buttonsContainer">
          <button>
            <i class="uil uil-play"></i> Play
          </button>
          <button>
            <i class="uil uil-info-circle"></i> Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
