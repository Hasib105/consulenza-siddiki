'use client'
import React, { useEffect, useState } from "react";
import "./services.css";

export const Services: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = document.getElementById("services");
      const servicesPosition =
        servicesElement?.getBoundingClientRect().top ?? 0;

      // Check if the services section is in the viewport
      if (servicesPosition < window.innerHeight) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="services"
      className={`bg-base-200 p-4 ${animate ? "animate" : ""}`}
    >
      <h1 className="font-bold text-2xl items-center text-center mb-3">
        Our Services
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-2">
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            Caf &amp; Patronato
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            CONSULENZA FISCALE
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            CONSULENZA LEGALE
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            ASSICURAZIONI
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            BIGLIETTI AEREI{" "}
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            MONEY TRANSFER
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            PAGA BOLLETTE
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            RICARICHE TELEFONICHE
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            VENDITA CELLULARI
          </button>
          <button className="btn btn-outline hover:bg-success hover:text-white rounded-lg m-2">
            MONEY TRANSFER
          </button>
        </div>
      </div>
    </div>
  );
};