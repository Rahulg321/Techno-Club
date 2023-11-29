import Image from 'next/image';
import { ExecutiveMember } from '@/app/types';

const TeamCard = (props: ExecutiveMember) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16 ">
      <div className=" px-6 ">
        <Image
          src={props.member_pic}
          alt={`$Image of ${props.name} holding the position of Executive ${props.position}`}
          width={500}
          height={500}
          className="rounded-full w-auto h-auto"
        />
      </div>

      <div className="col-span-3 ">
        <h2 className="font-extrabold">{props.name}</h2>
        <h3 className="my-3 italic ">{props.position}</h3>
        <p className="font-light">{props.member_description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
