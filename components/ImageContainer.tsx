import Image from 'next/image';

type ImageContainer = {
  imageId: string;
  image: string;
};

const ImageContainer = (props: ImageContainer) => {
  return (
    <div
      className="h-64 relative bg-static overflow-hidden group"
      key={props.imageId}
    >
      <Image
        alt="some image"
        src={props.image}
        fill={true}
        priority
        sizes="90vw"
        className="object-cover rounded-xl group-hover:opacity-75"
      />
    </div>
  );
};

export default ImageContainer;
