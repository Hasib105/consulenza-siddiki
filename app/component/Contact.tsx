'use client'

import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactElement = document.getElementById("contact");
      const contactPosition = contactElement?.getBoundingClientRect().top ?? 0;

      // Check if the contact section is in the viewport
      if (contactPosition < window.innerHeight) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="contact"
      className={`hero min-h-screen bg-base-200 ${animate ? "animate" : ""}`}
    >
      <div className="hero-content flex-col">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Message"
                className="input input-bordered h-24 resize-y"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;