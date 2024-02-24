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
          <h1 className="mb-5 text-5xl font-bold animate-left">Ciao</h1>
          <p className="mb-5 animate-right">
            Semplifica la tua vita con la nostra gamma completa di servizi, tra
            cui assistenza fiscale, consulenza finanziaria, supporto legale,
            soluzioni assicurative e altro ancora. Affidati a noi per gestire le
            tue esigenze con professionalità e competenza, garantendo
            tranquillità e convenienza.
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