'use client'
import React, { useEffect, useRef } from "react";
import "./about.css";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      } else {
        entry.target.classList.remove("slide-in");
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust this threshold as needed
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (paragraphsRef.current.length > 0) {
      paragraphsRef.current.forEach((_, index) => {
        const paragraph = paragraphsRef.current[index];
        if (paragraph && aboutRef.current) {
          const options = {
            root: null,
            threshold: 0.5, // Adjust this threshold as needed
          };
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
              } else {
                entry.target.classList.remove("slide-in");
              }
            });
          }, options);
          observer.observe(paragraph);
          return () => {
            observer.unobserve(paragraph);
          };
        }
      });
    }
  }, [aboutRef.current, paragraphsRef.current]);

  return (
    <div
      className="about p-4 rounded-lg max-w-2xl mx-auto"
      id="about"
      ref={aboutRef}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
      <p
        className="text-base leading-7 mb-4"
        ref={(el) => (paragraphsRef.current[0] = el)}
      >
        Offriamo una vasta gamma di servizi per assistere le persone nelle loro
        diverse esigenze. Forniamo assistenza fiscale, aiutando i clienti a
        presentare le tasse e a navigare in moduli come ISEE e 730. Offriamo
        anche assistenza previdenziale, guidando le persone attraverso il
        processo di richiesta dei benefici. Inoltre, forniamo consulenza
        finanziaria, offrendo servizi come la definizione del budget e la
        pianificazione degli investimenti per aiutare i clienti a gestire le
        proprie finanze in modo efficace. Offriamo anche consulenza legale in
        settori quali il diritto contrattuale e il diritto di famiglia.
      </p>
      <p
        className="text-base leading-7 mb-4"
        ref={(el) => (paragraphsRef.current[1] = el)}
      >
        Oltre a questi servizi, possiamo assistere con le esigenze assicurative,
        aiutando i clienti a trovare e acquistare assicurazioni sulla vita,
        assicurazioni sanitarie e altri tipi di copertura. Siamo inoltre
        specializzati in aste giudiziarie, aiutando i clienti a fare offerte e
        ad acquistare articoli in questo mercato unico. I nostri servizi di
        trasferimento di denaro sono disponibili per facilitare transazioni
        sicure e convenienti, mentre assistiamo anche nella prenotazione di
        biglietti aerei, autobus, treni e navi per scopi di viaggio.
      </p>
      <p
        className="text-base leading-7 mb-4"
        ref={(el) => (paragraphsRef.current[2] = el)}
      >
        Inoltre, offriamo servizi comodi come il pagamento delle bollette, le
        ricariche telefoniche, la spedizione e il ritiro dei pacchi. Abbiamo una
        gamma di telefoni cellulari, carte SIM e custodie per telefoni
        disponibili per la vendita. Nel complesso, il nostro obiettivo è fornire
        supporto completo alle persone in vari aspetti delle loro esigenze
        finanziarie, legali e logistiche.
      </p>
    </div>
  );
};

export default About;