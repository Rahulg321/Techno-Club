import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';

const TeamCard = () => {
  return (
    <div className="flex">
      <div>
        <Image
          src={rahulImg}
          width={200}
          height={200}
          alt="image of the author"
          className="rounded-full"
        />
      </div>

      <div>
        <h2>Rahul Gupta</h2>
        <h3>President</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quasi
          sequi molestias. Beatae quos quibusdam modi itaque sed voluptas dolor
          esse, autem accusantium minus culpa nulla dolores neque quisquam
          mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias, et tenetur non harum error autem nulla. Voluptatem libero
          nam eos iste itaque commodi ad! Iure quidem maiores maxime ipsa
          asperiores.
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
