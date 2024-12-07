import './cards.scss';
import logements from '../../logements.json';
import { Link } from 'react-router-dom'; // Import du composant Link

export function Cards() {
  return (
    <section className="cards-container">
      {logements.map((logement) => (
        <Link 
          to={`/logement/${logement.id}`} // Lien dynamique basé sur l'ID du logement
          className="card-link"
          key={logement.id}
        >
          <div className="card">
            <img src={logement.cover} alt={logement.title} className="card-image" />
            <div className="card-title">{logement.title}</div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Cards;