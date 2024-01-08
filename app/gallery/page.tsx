import getImageGallery from "@/firebase/get-image-gallery";
import ImageContainer from "@/components/ImageContainer";
import type { Metadata } from "next";
export const revalidate = 3600; // revalidate the data at most every hour

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "See photos and images from our past events",
};

const Gallery = async () => {
  return (
    <section className="big-container ">
      <div className="text-center">
        <h1>Our Image Gallery</h1>
        <h4 className="my-4">View some images from our past events</h4>
      </div>
    </section>
  );
};

export default Gallery;
