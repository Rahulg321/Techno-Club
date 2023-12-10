import { collection, getDocs } from 'firebase/firestore';
import { db } from './config.js';
import { GalleryImage } from '@/app/types.js';

const getImageGallery = async () => {
  const fetchedGalleryImages: GalleryImage[] = [];

  const querySnapshot = await getDocs(collection(db, 'image_gallery'));
  querySnapshot.forEach((doc) => {
    const imageId = doc.id;
    const image = {
      ...(doc.data() as GalleryImage),
      imageId,
    };
    fetchedGalleryImages.push(image);
  });
  return fetchedGalleryImages;
};

export default getImageGallery;
