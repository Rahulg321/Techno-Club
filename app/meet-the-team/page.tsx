import TeamCard from '@/components/teamCard/TeamCard';
import MemberCard from '@/components/memberCard/MemberCard';

const MeetTeam = () => {
  return (
    <>
      <h1>Meet the Team</h1>
      <h3>The Executives!!</h3>

      <section className="big-container">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>

      <section className="big-container">
        <h2>Community Representatives</h2>
        <div className="flex flex-wrap gap-4">
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
      <section className="big-container">
        <h2>Social Media Team</h2>
        <div className="flex flex-wrap gap-4">
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
      <section className="big-container">
        <h2>Event Management Team</h2>
        <div className="flex flex-wrap gap-4">
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
