import Banner from "../components/Banner";
import Faq from "../components/Faq";
import PromoItem from "../components/PromoItem";
import { faqDummyData } from "../utils/faq-dummy-data";
import WelcomeContent from "../components/WelcomeContent";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <>
      <Banner
        actions={
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="signup"
          >
            Sign In
          </button>
        }
      >
        <WelcomeContent />
      </Banner>
      <PromoItem
        tv
        title="Enjoy on your TV."
        description=" Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more."
        img="tv-png.png"
        // video="video1.m4v"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />
      <PromoItem
        title="Download your shows to watch offline."
        description="Save your favorites easily and always have something to watch."
        img="mobile.jpg"
        reverse
      >
        <div className="animationContainer">
          <div>
            <img src="phone-screen.png" alt="phone sreen" />
          </div>
          <div>
            <div>Strangers Things</div>
            <div style={{ color: "#004BEB" }}>Downloading...</div>
          </div>
          <div className="animation"></div>
        </div>
      </PromoItem>
      <PromoItem
        pc
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        img="pc-png.png"
        // video="video2.m4v"
        video="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />
      <PromoItem
        title="Create profiles for kids."
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        img="kids.png"
        reverse
      />
      <Faq questions={faqDummyData} />

      <Footer />
      <br />
      <br />
      <br></br>
      <br></br>
    </>
  );
};

export default Welcome;
