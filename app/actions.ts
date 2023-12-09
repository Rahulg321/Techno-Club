'use server';

import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND);

export const sendContactFormEmail = async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const content = formData.get('content');

  if (!name || typeof name !== 'string') {
    return {
      error: 'please enter a valid name',
    };
  }
  if (!content || typeof content !== 'string') {
    return {
      error: 'Invalid message',
    };
  }

  if (!email || typeof email !== 'string') {
    return {
      error: 'Enter a valid email',
    };
  }

  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    reply_to: email,

    to: 'rahulguptax14@gmail.com',
    subject: 'Inquiry from Contact Form',
    react: React.createElement(ContactFormEmail, {
      message: content,
      email,
      name,
    }),
  });

  return {
    success: 'sent message',
  };
};
