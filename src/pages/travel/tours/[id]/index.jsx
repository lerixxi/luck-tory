import { tours } from "@/data/travelPage/tours";
import { TourDetailsPage } from "@/components/pages/travel/tours/TourDetailsPage/TourDetailsPage";

const TourDetailsPageServer = ({ tour }) => {
  console.log(tour);
  return <TourDetailsPage tour={tour} />;
};

export async function getStaticPaths() {
  const paths = tours.map((tour) => ({
    params: { id: tour.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tour = tours.find((tour) => tour.id === Number(params.id));

  return { props: { tour } };
}

export default TourDetailsPageServer;
