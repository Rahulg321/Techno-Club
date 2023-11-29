import Image from 'next/image';
import rahulImg from '@/public/rahul.jpeg';

const MemberCard = () => {
  return (
    <div className=" flex flex-col items-center">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/nextjs-techno-club.appspot.com/o/me001.jpeg?alt=media&token=c60ddc8e-6d5f-4ba7-91b8-4b6695c1df1f"
        height={100}
        width={100}
        alt="profile img of some person"
        className="rounded-full "
      />
      <p className="font-bold">Rahul Gupta</p>
      <p className="font-light">Team Lead</p>
    </div>
  );
};

export default MemberCard;
