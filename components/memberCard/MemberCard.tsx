import Image from 'next/image';
import { Member } from '@/app/types';

const MemberCard = (props: Member) => {
  return (
    <div>
      <div className="h-64 p-4 relative overflow-hidden group">
        <Image
          alt="some image"
          src={props.member_profile_pic}
          fill={true}
          sizes="calc(90vw - 32px)"
          className="object-cover rounded-full group-hover:opacity-75"
        />
      </div>
      <p className="font-bold">{props.member_name}</p>
      <p className="font-light italic">{props.member_position}</p>
    </div>
  );
};

export default MemberCard;
