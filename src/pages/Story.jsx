import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import siteContent from "../data/siteContent";
import bannerImage from "../assets/branding/banner.jpg";
import Seo from "../components/Seo";

function Story() {
  return (
    <>
      <Seo
        title="Our Story"
        description="From a roadside shrimp business to a Louisiana seafood tradition — discover the history of Steamboat Bill's in Lake Charles, LA."
        path="/story"
      />
      <Navbar />

      <main className="story-page">

        {/* Story Hero */}
        <section
          className="story-hero"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="story-hero-overlay"></div>

          <div className="story-hero-inner">
            <p className="section-eyebrow">
              Our Story
            </p>

            <h1>{siteContent.story.title}</h1>

            <p>
              From a roadside shrimp business to a Louisiana seafood
              tradition that has stood the test of time.
            </p>
          </div>
        </section>

        {/* Story Sections */}
        {siteContent.story.sections.map((section, index) => (
          <section
            className={`story-section ${
              index % 2 === 1 ? "story-section-alt" : ""
            }`}
            key={section.title}
          >
            <div className="story-section-inner">

              <div className="story-section-content">

                <p className="section-eyebrow">
                  {section.eyebrow}
                </p>

                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}

              </div>

            </div>
          </section>
        ))}

        {/* Closing */}
        <section className="story-legacy">

          <div className="story-legacy-inner">

            <p className="section-eyebrow">
              The Steamboat Bill's Family
            </p>

            <h2>
              {siteContent.story.sections[
                siteContent.story.sections.length - 1
              ].closing.heading}
            </h2>

            <p>
              {siteContent.story.sections[
                siteContent.story.sections.length - 1
              ].closing.text}
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Story;
