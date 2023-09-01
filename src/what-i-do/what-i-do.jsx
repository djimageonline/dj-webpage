import "./what-i-do.css";
import { BsFillSpeakerFill, BsFillCalendar2EventFill } from "react-icons/bs";
import { BiDrink, BiSolidBusiness } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { FiRadio } from "react-icons/fi";

export default function WhatIDo() {
  return (
    <div id="what-I-do" className="services-container">
      <h3 id="title">What I Do</h3>
      <div className="service-container-grid">
        <div className="card-grid-item">
          <div className="content">
            <BsFillSpeakerFill className="icon-services" />
            <h2>Nightclubs</h2>
            <p>
              With years of honed skills and expert song selections, entrusting your dance floor to me guarantees a
              popping club experience.
            </p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BiDrink className="icon-services" />
            <h2>Lounges</h2>
            <p>
              Elevate your venue with my exclusive DJ expertise! I craft the perfect musical atmosphere, keeping your
              guests entertained and coming back for more. Contact me to enhance your bar or lounge experience!
            </p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BsFillCalendar2EventFill className="icon-services" />
            <h2>Private Events</h2>
            <p>
              Celebrate in style with tailored music for birthdays, anniversaries, graduations and private parties. I
              keep the party going!
            </p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <GiLinkedRings className="icon-services" />
            <h2>Weddings</h2>
            <p>
              Make your day memorable with my expert wedding DJ service. Personalized playlists from ceremony to dance
              party.
            </p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BiSolidBusiness className="icon-services" />
            <h2>Corporate Events</h2>
            <p>
              Office parties, grand openings, business gatherings, and product launches, you name it. Impress clients
              with my professional DJ service. Seamless transitions, curated playlists, and trust as your exclusive DJ.
            </p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <FiRadio className="icon-services" />
            <h2>Mixshows</h2>
            <p>Tune in for the perfect radio mixshow. Engaging tracks for daily shows or specials.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
