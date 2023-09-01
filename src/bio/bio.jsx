import "./bio.css";

export default function Bio() {
  return (
    <div className="bio-container" id="bio">
      <div className="img-bio"></div>
      <h2 className="bio-title">A bit about me</h2>

      <div className="bio-grid">
        <div className="bio-grid-card">
          <div className="bio-content ">
            <h2>DJ IMAGE</h2>
            <p className="bio-para">
              Music has always been a passion. Whether it is making music, mixing music, or just playing and
              entertaining crowds. Throughout the years, I’ve gained experience and knowledge from many talented
              musicians and deejays. These moments are those that has given me the opportunity to further my path within
              the music industry in both “nightclub” and “radio” as well as allowing me to play in some amazing events
              beyond what I imagined. Being able to go from a simple in-home deejay setup to playing as a resident Radio
              On-Air Deejay is an example of hard work, dedication and persistence.
            </p>
          </div>
        </div>

        <div className="bio-grid-card">
          <div className="bio-content">
            <h2>Radio Mixhows Played</h2>
            <ul>
              <li>103.5 Kiss FM & IHeartRadio (Chicago)</li>
              <li>Pitbulls Globilization SiriusXM CH13 (Guest DJ)</li>
              <li>La Kalle 93.5 y 103.1FM (Univision Radio)</li>
              <li>Latino Mix 93.5 FM (Univision Radio)</li>
              <li>DJCity Podcast (Guest DJ)</li>
              <li>The Image Effect Podcast on Mixcloud</li>
            </ul>
          </div>
        </div>

        <div className="bio-grid-card">
          <div className="bio-content">
            <h2>Events Played</h2>
            <ul>
              <li>Chicago Fire Events (MLS) - Toyota Park</li>
              <li>Chicago Cubs (MLB)</li>
              <li>Chicago Bulls - United Center (NBA)</li>
              <li>Chicago Bears Events (NFL) Bourbonnais</li>
              <li>Soldier Field Family Fest </li>
              <li>Chicago Auto Show (McCormick Place)</li>
              <li>North American Auto Show (Detroit)</li>
              <li>Coca Cola Copa America Tour 2016</li>
              <li>Orange County Convention Center (Orlando)</li>
              <li>Wrigley’s Orbit Promo Event</li>
              <li>Six Flags Great America</li>
              <li>Hoy Events (Chicago Tribune)</li>
              <li>Univision Events</li>
              <li>Lincoln Park Zoo & Brookfield Zoo Family Fest</li>
              <li>Shedd Aquarium Private Event</li>
              <li>Goya Foods Private Events</li>
              <li>Tommy Hilfigure, Express, MAC store Events, Metro PCS </li>
            </ul>
          </div>
        </div>

        <div className="bio-grid-card">
          <div className="bio-content">
            <h2>Venues Played</h2>
            <ul>
              <li>Nacional 27 (Chicago)</li>
              <li>8fifty8 (Chicago)</li>
              <li>Park Tavern (Rosemont)</li>
              <li>the MID</li>
              <li>Adobe Gila’s (Rosemont)</li>
              <li>Joe’s Bar Live</li>
              <li>Social 25</li>
              <li>House of Blues</li>
              <li>All State Arena (Chicago)</li>
              <li>Aragon Ballroom</li>
              <li>Congress Theater</li>
              <li>G.E.M. Theater (Detroit)</li>
              <li>Gillete Stadium (Boston)</li>
              <li>Soldier Field (Chicago) </li>
              <li>United Center (Chicago)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
