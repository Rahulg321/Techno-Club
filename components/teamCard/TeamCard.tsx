import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16">
      <div className=" px-6 ">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/nextjs-techno-club.appspot.com/o/me002.jpeg?alt=media&token=b1ae063a-48da-4406-bef0-f0484e145208"
          alt="image of the author"
          width={500}
          height={500}
          className="md:rounded-full w-auto h-auto"
        />
      </div>

      <div className="col-span-3 ">
        <h2 className="font-extrabold">Rahul Gupta</h2>
        <h3 className="my-6 font-semibold">President</h3>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi
          sequi molestias. Beatae quos quibusdam modi itaque sed voluptas dolor
          esse, autem accusantium minus culpa nulla dolores neque quisquam
          mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias, et tenetur non harum error autem nulla. Voluptatem libero
          nam eos iste itaque commodi ad! Iure quidem maiores maxime ipsa
          asperiores.lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cupiditate molestiae eveniet voluptatum beatae quae ipsam amet
          porro non odio, neque quidem laboriosam enim quaerat blanditiis quis,
          excepturi deserunt assumenda repudiandae!
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
