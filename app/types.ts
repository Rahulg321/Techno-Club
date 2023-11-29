export type Event = {
  eventId: string;
  name: string;
  event_description: string;
  event_detail: string;
  event_venue: string;
  currentEvent: boolean;
  created_at: Date;
  event_date: Date;
};

export type Blog = {
  blogId: string;
  cover_img: string;
  title: string;
  written_by: string;
  description: string;
  main_content: string;
  created_at: Date;
};

export type ExecutiveMember = {
  memberId: string;
  name: string;
  member_description: string;
  position: string;
  rank: number;
  member_pic: string;
};

export type Member = {
  memberId: string;
  member_name: string;
  member_position: string;
  member_profile_pic: string;
};
