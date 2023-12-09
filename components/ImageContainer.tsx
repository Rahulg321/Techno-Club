import Image from 'next/image';
import { GalleryImage } from '@/app/types';

const ImageContainer = (props: GalleryImage) => {
  return (
    <div
      className="relative h-64 bg-static overflow-hidden group"
      key={props.imageId}
    >
      <Image
        alt="some image"
        src={props.image_url}
        fill={true}
        sizes="90vw"
        className="object-cover rounded-xl group-hover:opacity-75"
      />
    </div>
  );
};

export default ImageContainer;
