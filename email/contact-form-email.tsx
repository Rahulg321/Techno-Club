import React from 'react';
import {
  Html,
  Body,
  Head,
  Hr,
  Heading,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  email: string;
  name: string;
  message: string;
};

const ContactFormEmail = ({ message, email, name }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from Techno Club Website</Preview>
      <Tailwind>
        <Body className="bg-static text-text">
          <Container>
            <Section className="border my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Received the following message from {name}
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>This senders email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
