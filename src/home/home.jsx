import CarouselHero from "../carousel/carousel";
import Contact from "../contact/contact";
import "./home.css";
import { FaMixcloud, FaTiktok, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <CarouselHero />
      </div>

      <div className="text-container">
        <div className="icon-list">
          <a className="icon-link" href="https://www.mixcloud.com/djimageonline/" target="blank">
            <FaMixcloud className="icon" />
          </a>
          <a className="icon-link" href="https://www.instagram.com/djimageonline/" target="blank">
            <FaInstagramSquare className="icon" />
          </a>
          <a className="icon-link" href="https://www.tiktok.com/@djimageonline" target="blank">
            <FaTiktok className="icon" />
          </a>
          <a className="icon-link" href="https://www.facebook.com/djimageonline1/" target="blank">
            <FaFacebookSquare className="icon" />
          </a>
        </div>
      </div>

      <div className="main-home-content">
        <iframe
          className="iframe"
          width="100%"
          height="200"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fdjimageonline%2Fthe-image-effect-ep-16-feat-dj-rican-indianapolis%2F"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>

      <Contact />
    </div>
  );
}
