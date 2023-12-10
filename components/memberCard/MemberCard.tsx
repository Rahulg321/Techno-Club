import Image from 'next/image';
import { Member } from '@/app/types';

const MemberCard = (props: Member) => {
  return (
    <div className=" flex flex-col justify-start">
      <div className="h-64 lg:h-64 p-4 relative mb-2 overflow-hidden group">
        <Image
          alt="some image"
          src={props.member_profile_pic}
          fill={true}
          sizes="calc(90vw - 32px)"
          className="object-contain  lg:object-cover lg:rounded-xl group-hover:opacity-75"
        />
      </div>
      <p className="font-bold text-center">{props.member_name}</p>
      <p className="font-light italic text-center">{props.member_position}</p>
    </div>
  );
};

export default MemberCard;
