import { useParams } from 'react-router-dom';
import logements from '../../logements.json';
import { useState } from 'react';
import './carrousel.scss';
import arrowLeft from '../../images/arrow_left.png';
import arrowRight from '../../images/arrow_right.png';

export function Carrousel() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  if (!logement) {
    return <p>Logement non trouvé</p>;
  }

  return (
    <div className="carrousel-container">
      {/* Carrousel */}
      <div className="carrousel">
        <img
          src={logement.pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carrousel-image"
        />
        <button className="prev" onClick={handlePrev}>
          <img src={arrowLeft} alt="Précédent" className="arrow-icon" />
        </button>
        <button className="next" onClick={handleNext}>
          <img src={arrowRight} alt="Suivant" className="arrow-icon" />
        </button>
        <div className="carrousel-indicator">
          {currentIndex + 1}/{logement.pictures.length}
        </div>
      </div>

      {/* Informations supplémentaires */}
      <div className="logement-info">
        <div className="logement-header">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="logement-host">
            <div className="host-name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
        </div>

        {/* Étoiles */}
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < logement.rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Description et Équipements */}
        <div className="logement-details">
          <div className="details-container">
            {/* Description Accordion */}
            <div className="accordion">
              <div
                className="accordion-title"
                onClick={() => setDescriptionOpen(!isDescriptionOpen)}
              >
                Description
                <span className={`arrow ${isDescriptionOpen ? 'open' : ''}`}></span>
              </div>
              {isDescriptionOpen && (
                <div className="accordion-content-description">
                  {logement.description}
                </div>
              )}
            </div>

            {/* Equipments Accordion */}
            <div className="accordion">
              <div
                className="accordion-title"
                onClick={() => setEquipmentsOpen(!isEquipmentsOpen)}
              >
                Équipements
                <span className={`arrow ${isEquipmentsOpen ? 'open' : ''}`}></span>
              </div>
              {isEquipmentsOpen && (
                <div className="accordion-content-equipments">
                  {logement.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;