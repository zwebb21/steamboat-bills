import heroImage from "../assets/hero/hero.png";
import siteContent from "../data/siteContent";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">

        <p>{siteContent.hero.eyebrow}</p>

        <h1>{siteContent.hero.title}</h1>

        <p>{siteContent.hero.description}</p>

        <div className="hero-buttons">
          <Link to="/menu">
            {siteContent.hero.primaryCta}
          </Link>

          <a href="#">
            {siteContent.hero.secondaryCta}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
