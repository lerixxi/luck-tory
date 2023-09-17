import { CurrentTours } from "@/components/pages/travel/currentTours/CurrentTours";
import { Hero } from "@/components/pages/travel/hero/Hero";

const ToursPage = () => {
  return (
    <>
      <Hero urlImage="/images/tours/testTour_1/hero.jpg" />
      <CurrentTours />
    </>
  );
};

export default ToursPage;
