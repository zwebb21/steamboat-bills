import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedFood from "../components/FeaturedFood";
import StoryPreview from "../components/StoryPreview";
import Location from "../components/Location";
import Footer from "../components/Footer";
import MailingList from "../components/MailingList";

function Home() {
    return (
      <>
        <Navbar />
        <Hero />
        <FeaturedFood />
        <StoryPreview />
        <MailingList />
        <Location />
        <Footer />
      </>
    );
  }

export default Home;