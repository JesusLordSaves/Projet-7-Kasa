import './banner.scss';

export function Banner() {
  return (
    <section className="banner">
      <img 
        className="banner-image" 
        src="../images/banner-image.JPG" 
        alt="Bannière accueil" 
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;

