// import { Hero } from "@/components/pages/photos/hero/Hero";
import { PhotoMenu } from "@/components/pages/photos/photoMenu/PhotoMenu";
import { PhotoGallery } from "@/components/pages/photos/photoGallery/PhotoGallery";
import { Hero } from "@/components/common/hero/Hero";

const Photos = () => {
  return (
    <>
      <Hero
        title="Люди поділяються на 2 категорії:"
        description="ті, котрі люблять фотографуватися,
          і ті, котрі ще не знають, що вони люблять фотографуватися"
        background="/images/photosPage/hero.jpg"
      />
      <PhotoMenu />
      <PhotoGallery />
    </>
  );
};

export default Photos;
