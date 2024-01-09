import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Members",
  description: "Meet the team members of Techno Club",
};

export const revalidate = 3600; // revalidate the data at most every hour

const MeetTeam = async () => {
  return <>Meet our team</>;
};

export default MeetTeam;
