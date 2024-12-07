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
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openSections.includes(index)}
            toggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ title, content, isOpen, toggle }) {
  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div className="accordion-title" onClick={toggle}>
        {title}
        <span className={`arrow ${isOpen ? "down" : "up"}`}></span>
      </div>
      {isOpen && (
        <div className="accordion-content-container">
          <div className="accordion-content">{content}</div>
        </div>
      )}
    </div>
  );
}

export default About;


