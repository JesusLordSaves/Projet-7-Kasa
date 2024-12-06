import { useState } from 'react';
import './about.scss';

export function About() {
  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index)); // Ferme la section
    } else {
      setOpenSections([...openSections, index]); // Ouvre la section
    }
  };

  const accordionItems = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité de service est une priorité. Nous nous assurons que les standards les plus élevés soient respectés pour une expérience agréable.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement répond aux critères établis par nos services.",
    },
  ];

  return (
    <section className="about">
      <div className="about-banner"></div>
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div
            className={`accordion-item ${openSections.includes(index) ? "active" : ""}`}
            key={index}
          >
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`arrow ${openSections.includes(index) ? "down" : "up"}`}
              >
              </span>
            </div>
            {openSections.includes(index) && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;


