import { Hero } from "@/components/common/hero/Hero";
import { CurrentTours } from "@/components/pages/travel/currentTours/CurrentTours";

const ToursPage = () => {
  return (
    <>
      <Hero
        background="/images/photosPage/toursPage/hero.jpg"
        title="Життя – це подорожі,"
        description="Подорожі – ось це життя!"
      />
      <CurrentTours />
    </>
  );
};

export default ToursPage;
