import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';

const MemberCard = () => {
  return (
    <div>
      <Image
        src={rahulImg}
        height={100}
        width={100}
        alt="profile img of some person"
        className="rounded-full "
      />
      <p>Rahul Gupta</p>
      <p>Team Lead</p>
    </div>
  );
};

export default MemberCard;
