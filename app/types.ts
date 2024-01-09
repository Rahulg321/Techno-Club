import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
