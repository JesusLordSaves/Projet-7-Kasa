import './_header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="logo">Kasa</div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">À Propos</a>
      </nav>
    </header>
  );
}

export default Header;

