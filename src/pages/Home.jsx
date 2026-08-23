import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedFood from "../components/FeaturedFood";
import StoryPreview from "../components/StoryPreview";
import Location from "../components/Location";
import Footer from "../components/Footer";
import MailingList from "../components/MailingList";
import Seo from "../components/Seo";

function Home() {
    return (
      <>
        <Seo
          title="Authentic Louisiana Seafood in Lake Charles, LA"
          description="Steamboat Bill's serves authentic Louisiana seafood, Cajun cooking, boiled crawfish, po-boys and more on the lake in Lake Charles, LA. View our menu, order online, or visit us today."
          path="/"
        />
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
