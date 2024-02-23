'use client'


import React from "react";
import "./hero.css";

const Hero = () => {
  const targetSectionId = "content-section";

  const handleButtonClick = () => {
    try {
      const targetElement = document.getElementById(targetSectionId);

      if (targetElement) {
        window.scrollTo({
          behavior: "smooth",
          top: targetElement.offsetTop - 100,
        });
      } else {
        console.error(`Element with ID '${targetSectionId}' not found.`);
      }
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://blog.invgate.com/hubfs/WSJ-post-Blog_Post%204.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold animate-left">Hello there</h1>
          <p className="mb-5 animate-right">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button
            className="btn btn-primary animate-up-down"
            id="content-section"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;