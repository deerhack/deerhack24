import Hero from "@/app/sections/home/Hero";
import Footer from "@/app/components/Footer/Footer";
import PrizesPage from "@/app/(pages)/Prizes";
import ExpectationsPage from "@/app/(pages)/Expectations";
import AboutTheEventPage from "@/app/(pages)/AboutTheEventPage";
import DeerhackStatsPage from "@/app/(pages)/DeerhackStatsPage";
import TrackPage from "@/app/(pages)/TrackPage";
import BenefitsPage from "@/app/(pages)/BenefitsPage";
import SponsorPage from "@/app/(pages)/SponsorsPage";
import RegisterPage from "@/app/(pages)/RegisterPage";
import ImageCarouselPage from "@/app/(pages)/ImageCarouselPage";
import FAQ from "@/app/(pages)/FAQ";
import Judges from "@/app/(pages)/Judges";
import Mentors from "@/app/(pages)/Mentors";
import Navbar from "@/app/components/Navbar/Navbar";
import ParticipantsVideoPage from "./(pages)/ParticipantsPage";

export default function Home() {
  return (
    <>
      <Navbar />
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
