import TeamCard from '@/components/teamCard/TeamCard';
import MemberCard from '@/components/memberCard/MemberCard';

const MeetTeam = () => {
  return (
    <>
      <section className="big-container">
        <h1>Meet the Team</h1>
        <h3 className="heading">The Executives!!</h3>
      </section>

      <section className="big-container">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>

      <section className="narrow-container">
        <h2 className="heading">Social Media Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
      <section className="narrow-container">
        <h2 className="heading">Business Development Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
      <section className="narrow-container">
        <h2 className="heading">Community Representatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
    </>
  );
};

export default MeetTeam;
