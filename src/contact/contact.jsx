// import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="form-container">
      <div className="form-inner">
        <h1>Connect with me!</h1>
        <form action="https://formsubmit.co/djimageonline@gmail.com" method="POST">
          <input className="input" type="text" name="name" placeholder="Full Name" required />
          <input className="input" type="text" name="email" placeholder="Email" required />
          <input className="input" type="number" name="phone" placeholder="Phone: 777-123-1234" required />
          <input className="input" type="text" name="date" placeholder="Event Date" />
          <input className="input" type="text" name="time" placeholder="Event Time" />
          <input className="input" type="text" name="location" placeholder="Event Location" />
          <textarea name="postContent" rows={4} cols={40} placeholder="Tell me a bit more about your event" required />
          <input type="submit" value="Submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
