import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Row,
  Column,
  Heading,
  Container,
  Preview,
  Section,
  Text,
  Link,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import PersonImg from "@/public/personWatching.png";
// import Link from "next/link";

type EventRegisterEmailProps = {
  email: string;
  name: string;
  course: string;
  rollNumber: string;
  eventName: string;
  eventDate: string;
  eventVenue: string;
};

const EventRegisterEmail = ({
  rollNumber,
  email,
  name,
  course,
  eventName,
  eventDate,
  eventVenue,
}: EventRegisterEmailProps) => {
  const footerLink = "text-underline italic text-gray-400";

  return (
    <Html>
      <Head />
      <Preview>Successful Registration for {eventName}</Preview>
      <Tailwind>
        <Body>
          <Container className="max-w-600 mx-auto">
            <Section>
              <Heading className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                Pcte Techno Club
              </Heading>
            </Section>
            <Section className=" border mb-4">
              <Img
                width={620}
                height={420}
                src={`https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              />
              <Text className="italic text-black mb-2 text-xl">
                Thanks for joining
              </Text>
              <Heading as="h1" className="text-black text-4xl underline">
                Your Registration is Complete
              </Heading>
            </Section>

            <Section className="border rounded-md py-4 px-8">
              <Heading className="text-2xl text-center underline italic">
                Hi {name},
              </Heading>
              <Heading as="h2" className="text-xl text-center">
                Thank you for registering for the event.
              </Heading>
              <Text className="text-text">
                Please check the following details
              </Text>
              <Text className="text-base">
                <b>Event Name: </b>
                {eventName}
              </Text>
              <Text className="text-base">
                <b>Event Date: </b>
                {eventDate}
              </Text>
              <Text className="text-base">
                <b>Venue: </b>
                {eventVenue}
              </Text>
              <Text className="text-base">
                <b>Student Roll No: </b>
                {rollNumber}
              </Text>
              <Text className="text-base">
                <b>Student Name: </b>
                {name}
              </Text>
              <Text className="text-base">
                <b>Student Course: </b>
                {course}
              </Text>
              <Text className="text-base">
                <b>Student Email: </b>
                {email}
              </Text>
              <Hr className="my-8" />
              <Link
                className={footerLink}
                href="https://slackhq.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Our blog
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                href="https://slack.com/legal"
                target="_blank"
                className={footerLink}
                rel="noopener noreferrer"
              >
                Policies
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className={footerLink}
                href="https://slack.com/help"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help center
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                className={footerLink}
                href="https://slack.com/community"
                target="_blank"
                rel="noopener noreferrer"
                data-auth="NotApplicable"
                data-linkindex="6"
              >
                Slack Community
              </Link>
              <Text className="mb-12 text-slate-500 leading-snug text-xs text-left">
                ©2024 Pcte Techno Club, Ludhiana. <br />
                500 Howard Street, San Francisco, CA 94105, USA <br />
                <br />
                All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EventRegisterEmail;
