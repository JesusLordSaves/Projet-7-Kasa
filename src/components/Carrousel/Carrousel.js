import { useParams } from 'react-router-dom';
import logements from '../../logements.json';
import { useState } from 'react';
import './carrousel.scss';
import arrowLeft from '../../images/arrow_left.png'; // Import de l'image flèche gauche
import arrowRight from '../../images/arrow_right.png'; // Import de l'image flèche droite

export function Carrousel() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

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

        {/* Description et équipements */}
        <div className="logement-details">
          <div className="details-container">
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-title">Description</div>
                <div className="accordion-content">{logement.description}</div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion-item">
                <div className="accordion-title">Équipements</div>
                <div className="accordion-content">
                  <ul>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;