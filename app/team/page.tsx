import TeamCard from '@/components/teamCard/TeamCard';
import MemberCard from '@/components/memberCard/MemberCard';

import {
  getExecutiveMembers,
  getMembers,
} from '@/firebase/getExecutiveMembers';

const MeetTeam = async () => {
  const executiveMembers = await getExecutiveMembers();

  const [facultyTeam, developmentTeam, socialTeam] = await Promise.all([
    getMembers('Faculty'),
    getMembers('Development'),
    getMembers('Social'),
  ]);

  return (
    <>
      <section className="big-container">
        <h1>Meet the Team</h1>
        <h3 className="heading">The Executives!!</h3>
      </section>

      <section className="big-container">
        {executiveMembers.map((e) => {
          return <TeamCard key={e.memberId} {...e} />;
        })}
      </section>

      <section className="narrow-container">
        <h2 className="heading">Faculty Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {facultyTeam.map((e) => {
            return <MemberCard key={e.memberId} {...e} />;
          })}
        </div>
      </section>
      <section className="narrow-container">
        <h2 className="heading">Social Media Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {socialTeam.map((e) => {
            return <MemberCard key={e.memberId} {...e} />;
          })}
        </div>
      </section>
      <section className="narrow-container">
        <h2 className="heading">Development Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {developmentTeam.map((e) => {
            return <MemberCard key={e.memberId} {...e} />;
          })}
        </div>
      </section>
    </>
  );
};

export default MeetTeam;
