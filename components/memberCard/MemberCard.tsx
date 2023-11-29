import Image from 'next/image';
import { Member } from '@/app/types';

const MemberCard = (props: Member) => {
  return (
    <div className=" flex flex-col items-center">
      <Image
        src={props.member_profile_pic}
        height={100}
        width={100}
        alt="profile img of some person"
        className="rounded-full "
      />
      <p className="font-bold">{props.member_name}</p>
      <p className="font-light italic">{props.member_position}</p>
    </div>
  );
};

export default MemberCard;
