import siteContent from "../data/siteContent";
import { Link } from "react-router-dom";
import bannerImage from "../assets/branding/banner.jpg";

function StoryPreview() {
  return (
    <section className="story-preview">
      <div className="story-preview-inner">

        <div className="story-preview-image">
          <img
            src={bannerImage}
            alt="Steamboat Bill's"
            className="story-preview-img"
          />
        </div>

        <div className="story-preview-content">
          <p className="section-eyebrow">
            Our Story
          </p>

          <h2>{siteContent.story.title}</h2>

          <p>{siteContent.story.excerpt}</p>

          <Link
            to={siteContent.story.link}
            className="text-link"
          >
            Read Our Story →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default StoryPreview;