import getImageGallery from '@/firebase/get-image-gallery';
import ImageContainer from '@/components/ImageContainer';

const Gallery = async () => {
  const fetchedImages = await getImageGallery();
  console.log(fetchedImages);

  return (
    <section className="big-container py-2 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="text-center">
        <h1>Image Gallery</h1>
        <h3>View some of our content</h3>
      </div>

      {fetchedImages.map((e) => (
        <ImageContainer {...e} />
      ))}
    </section>
  );
};

export default Gallery;
