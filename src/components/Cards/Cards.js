import './cards.scss';
import logements from '../../logements.json';

export function Cards() {
  return (
    <section className="cards-container">
      {logements.map((logement) => (
        <div className="card" key={logement.id}>
          <img src={logement.cover} alt={logement.title} className="card-image" />
          <div className="card-title">{logement.title}</div>
        </div>
      ))}
    </section>
  );
}

export default Cards;