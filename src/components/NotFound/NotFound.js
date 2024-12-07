import './NotFound.scss'; // Importez les styles spécifiques

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="/" className="back-link">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}

export default NotFound;