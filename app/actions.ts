"use server";

import React from "react";
import { Resend } from "resend";
import { UserRegistrationSchema, ContactFormEmailSchema } from "./schemas";
import ContactFormEmail from "@/email/contact-form-email";
import EventRegisterEmail from "@/email/event-register-email";
import { db } from "@/firebase/config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import {
  UserRegistrationSchemaType,
  ContactFormEmailSchemaType,
} from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const RegisterUserForEvent = async (
  userData: UserRegistrationSchemaType,
  eventName: string,
  eventVenue: string,
  eventDate: string
) => {
  // store user info in firstore those who have registered for the event
  try {
    const parsedUserData = UserRegistrationSchema.safeParse(userData);
    const name = parsedUserData.data.name;
    const email = parsedUserData.data.email;
    const course = parsedUserData.data.course;
    const rollNumber = parsedUserData.data.rollNumber;
    console.log("the info provided is valid", parsedUserData);
    const docRef = await addDoc(collection(db, eventName), parsedUserData.data);
    console.log("Document written with ID: ", docRef.id);

    console.log("sending confirmation email");
    await resend.emails.send({
      from: "Techno Club <onboarding@resend.dev>",
      to: email,
      subject: "Contact Form Message",
      reply_to: "rg5353070@gmail.com",
      react: React.createElement(EventRegisterEmail, {
        name,
        email,
        rollNumber,
        course,
        eventVenue,
        eventDate,
        eventName,
      }),
    });
    return { success: "registration was successful" };
  } catch (error) {
    console.error("Invalid user data:", error);
    // Return a custom error message or take other appropriate actions
    return { error: "Invalid user data provided" };
  }
};

export const ContactFormInquiry = async (data: ContactFormEmailSchemaType) => {
  try {
    const parsedMessage = ContactFormEmailSchema.safeParse(data);
    const senderName = parsedMessage.data.name;
    const senderEmail = parsedMessage.data.email;
    const senderMessage = parsedMessage.data.message;
    await resend.emails.send({
      from: "Techno Contact Form <onboarding@resend.dev>",
      to: "rg5353070@gmail.com",
      subject: "Contact Form Message",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: senderMessage,
        name: senderName,
        email: senderEmail,
      }),
    });
    return {
      success: "Your inquiry has been sent successfully",
    };
  } catch (error) {
    console.log("invalid");
    return {
      error: "Could not send inquiry",
    };
  }
};
