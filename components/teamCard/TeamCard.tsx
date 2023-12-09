import { ExecutiveMember } from '@/app/types';
import Image from 'next/image';

const TeamCard = (props: ExecutiveMember) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16 ">
      <div className="h-64 relative overflow-hidden group">
        <Image
          alt="some image"
          src={props.member_pic}
          fill={true}
          priority
          sizes="calc(90vw - 32px)"
          className="object-cover rounded-full group-hover:opacity-75"
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
