import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Catering() {
    return (

        <>

        <Navbar />
      <main className="catering-page">
  
        <section className="catering-hero">
          <div className="catering-hero-inner">
  
            <p className="section-eyebrow">
              Catering
            </p>
  
            <h1>
              Bring Steamboat Bill's To Your Next Event
            </h1>
  
            <p>
              From family gatherings to large celebrations,
              bring the taste of authentic Louisiana seafood
              to your table.
            </p>
  
            <a
              href="tel:3374941070"
              className="button"
            >
              Call For Catering
            </a>
  
          </div>
        </section>
  
  
        <section className="catering-options">
          <div className="catering-options-inner">
  
            <div className="catering-option">
              <p className="section-eyebrow">
                Gather
              </p>
  
              <h2>Family & Friends</h2>
  
              <p>
                Make your next gathering memorable with
                seafood favorites everyone can enjoy.
              </p>
            </div>
  
            <div className="catering-option">
              <p className="section-eyebrow">
                Celebrate
              </p>
  
              <h2>Special Events</h2>
  
              <p>
                Whether it's a birthday, reunion, or celebration,
                Steamboat Bill's can help feed the crowd.
              </p>
            </div>
  
            <div className="catering-option">
              <p className="section-eyebrow">
                Business
              </p>
  
              <h2>Corporate Events</h2>
  
              <p>
                Give your team something better than the usual
                catered lunch with authentic Louisiana seafood.
              </p>
            </div>
  
          </div>
        </section>
  
  
        <section className="catering-cta">
          <div className="catering-cta-inner">
  
            <p className="section-eyebrow">
              Let's Get Started
            </p>
  
            <h2>
              Planning An Event?
            </h2>
  
            <p>
              Give us a call and let's talk about your catering needs.
            </p>
  
            <a
              href="tel:3374941070"
              className="button"
            >
              337-494-1070
            </a>
  
          </div>
        </section>
  
      </main>
        <Footer />
        </>
    );
  }
  
  export default Catering;