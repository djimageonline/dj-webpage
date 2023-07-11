import "./home.css";

import { FaMixcloud, FaTiktok, FaInstagramSquare } from "react-icons/fa";

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
          <a>
            <FaMixcloud className="icon" />
          </a>
          <a>
            <FaInstagramSquare className="icon" />
          </a>
          <a>
            <FaTiktok className="icon" />
          </a>
          <a>
            <FaMixcloud className="icon" />
          </a>
        </div>
      </div>

      <iframe
        width="100%"
        height="400"
        src="https://www.mixcloud.com/widget/iframe/?light=1&autoplay=1&feed=%2Fdjimageonline%2F"
        frameborder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}
