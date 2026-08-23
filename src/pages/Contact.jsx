import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function Contact() {
    return (

        <>
    <Seo
      title="Contact Us"
      description="Get in touch with Steamboat Bill's in Lake Charles, LA. Find our address, phone number, and hours, or reach out about catering."
      path="/contact"
    />
    <Navbar/>
      <main className="contact-page">
  
        <section className="contact-hero">
          <div className="contact-hero-inner">
  
            <p className="section-eyebrow">
              Contact
            </p>
  
            <h1>
              Come See Us
            </h1>
  
            <p>
              Have a question, planning an event, or just craving
              some authentic Louisiana seafood? We'd love to hear
              from you.
            </p>
  
          </div>
        </section>
  
  
        <section className="contact-info">
          <div className="contact-info-inner">
  
            <div className="contact-card">
              <p className="section-eyebrow">
                Visit
              </p>
  
              <h2>Lake Charles</h2>
  
              <p>
                1004 North Lakeshore Dr.
                <br />
                Lake Charles, LA
              </p>
            </div>
  
  
            <div className="contact-card">
              <p className="section-eyebrow">
                Call
              </p>
  
              <h2>337-494-1070</h2>
  
              <a href="tel:3374941070">
                Call Us
              </a>
            </div>
  
  
            <div className="contact-card">
              <p className="section-eyebrow">
                Catering
              </p>
  
              <h2>Planning An Event?</h2>
  
              <p>
                Let us help bring Steamboat Bill's to your next
                gathering.
              </p>
  
              <a href="tel:3374941070">
                Ask About Catering
              </a>
            </div>
  
          </div>
        </section>
  
  
        <section className="contact-map">
          <div className="contact-map-inner">
  
            <div className="map-placeholder">
              <p>Map coming soon</p>
            </div>
  
          </div>
        </section>
  
      </main>
        <Footer />
        
        </>
    );
  }
  
  export default Contact;
