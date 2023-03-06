import "./PromoItem.scss";

const PromoItem = ({
  title,
  description,
  img,
  video,
  children,
  reverse,
  tv,
  pc,
}) => {
  const videoClasses = pc
    ? "videoContainer pc"
    : tv
    ? "videoContainer tv"
    : "videoContainer";
  return (
    <div className={reverse ? "promo-card reverse" : "promo-card"}>
      <div className="text">
        <h1 className="title">{title}</h1>
        <h2 className="description">{description}</h2>
      </div>
      <div className="mediaContainer">
        <div className="imgContainer">
          <img src={img} alt="tv"></img>
          {children}
        </div>
        {video && (
          <div className={videoClasses}>
            <video autoPlay muted loop playsInline>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromoItem;
