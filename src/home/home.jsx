import "./home.css";

import { FaMixcloud, FaTiktok, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <div className="image-shape-container">
        <div className="text">
          <h1>DEEJAY IMAGE</h1>
          <p>Hi, I'm a DJ formerly from Chicago, IL now residing in Orlando, FL</p>
        </div>
      </div>
      <div className="text-container">
        <div className="icon-list">
          <a href="https://www.mixcloud.com/djimageonline/" target="blank">
            <FaMixcloud className="icon" />
          </a>
          <a href="https://www.instagram.com/djimageonline/" target="blank">
            <FaInstagramSquare className="icon" />
          </a>
          <a href="https://www.tiktok.com/@djimageonline" target="blank">
            <FaTiktok className="icon" />
          </a>
          <a href="https://www.facebook.com/djimageonline1/" target="blank">
            <FaFacebookSquare className="icon" />
          </a>
        </div>
      </div>

      <iframe
        className="iframe"
        width="100%"
        height="200"
        src="https://www.mixcloud.com/widget/iframe/?light=1&autoplay=1&feed=%2Fdjimageonline%2F"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
