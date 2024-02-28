import Hero from "./sections/home/Hero";
import Footer from "./components/Footer/Footer";
import PrizesPage from "./pages/Prizes";
import ExpectationsPage from "./pages/Expectations";
import AboutTheEventPage from "./pages/AboutTheEventPage";
import DeerhackStatsPage from "./pages/DeerhackStatsPage";
import TrackPage from "./pages/TrackPage";
import BenefitsPage from "./pages/BenefitsPage";
import SponsorPage from "./pages/SponsorsPage";
import RegisterPage from "./pages/RegisterPage";
import ImageCarouselPage from "./pages/ImageCarouselPage";
import FAQ from "./pages/FAQ";
import Judges from "./pages/Judges";
import Mentors from "./pages/Mentors";
import ParticipantsVideoPage from "./pages/ParticipantsVideoPage";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutTheEventPage />
      <BenefitsPage />
      <TrackPage />
      <PrizesPage />
      <ExpectationsPage />
      <DeerhackStatsPage />
      <ImageCarouselPage />
      <ParticipantsVideoPage />
      <Judges />
      <Mentors />
      <FAQ />
      <SponsorPage />
      <RegisterPage />
      <Footer />
    </>
  );
}
