import { PortableTextBlock } from "sanity";

export type Event = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  eventDate: Date;
  content: PortableTextBlock[];
};

export type Blog = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  category: {
    name: string;
  };
  author: string;
  content: PortableTextBlock[];
};
