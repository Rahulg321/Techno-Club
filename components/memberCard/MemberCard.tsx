import Image from 'next/image';
import { Member } from '@/app/types';
import ImageContainer from '../ImageContainer';

const MemberCard = (props: Member) => {
  return (
    <div>
      <div className="h-64 relative overflow-hidden group">
        <Image
          alt="some image"
          src={props.member_profile_pic}
          fill={true}
          sizes="calc(90vw - 32px)"
          className="object-cover rounded-xl group-hover:opacity-75"
        />
      </div>
      <p className="font-bold">{props.member_name}</p>
      <p className="font-light italic">{props.member_position}</p>
    </div>
  );
};

export default MemberCard;
