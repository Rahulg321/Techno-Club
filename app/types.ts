import { PortableTextBlock } from "sanity";
import { z } from "zod";
import { ContactFormEmailSchema, UserRegistrationSchema } from "./schemas";

export type Event = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  venue: string;
  eventDate: string;
  description: string;
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

export type UserRegistrationSchemaType = z.infer<typeof UserRegistrationSchema>;
export type ContactFormEmailSchemaType = z.infer<typeof ContactFormEmailSchema>;
