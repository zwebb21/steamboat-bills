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

        <h2>{siteContent.hero.title}</h2>

        <p>{siteContent.hero.description}</p>

        <div className="hero-buttons">
          <Link to="/menu">
            {siteContent.hero.primaryCta}
          </Link>

          <a
            href="https://order.online/business/11291629/store/712727?utm_source=chatgpt.com&pickup=true&redirected=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteContent.hero.secondaryCta}
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
