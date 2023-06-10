import { Hero } from "@/components/pages/photos/hero/Hero";
import { PhotoMenu } from "@/components/pages/photos/photoMenu/PhotoMenu";
import { PhotoGallery } from "@/components/pages/photos/photoGallery/PhotoGallery";

const Photos = () => {
	return (
		<>
			<Hero />
			<PhotoMenu />
			<PhotoGallery />
		</>
	);
};

export default Photos;
