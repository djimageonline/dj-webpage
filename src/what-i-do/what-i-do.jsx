import "./what-i-do.css";
import { BsFillSpeakerFill, BsFillCalendar2EventFill } from "react-icons/bs";
import { BiDrink, BiSolidBusiness } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { FiRadio } from "react-icons/fi";

export default function WhatIDo() {
  return (
    <div id="what-I-do" className="services-container">
      <h2 id="title">What I Do</h2>
      <div className="service-container-grid">
        <div className="card-grid-item">
          <div className="content">
            <BsFillSpeakerFill className="icon-services" />
            <h2>Nightclubs</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BiDrink className="icon-services" />
            <h2>Lounges</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BsFillCalendar2EventFill className="icon-services" />
            <h2>Private Events</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <GiLinkedRings className="icon-services" />
            <h2>Weddings</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <BiSolidBusiness className="icon-services" />
            <h2>Corporate Events</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="content">
            <FiRadio className="icon-services" />
            <h2>Mixshows</h2>
            <p>Details coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
