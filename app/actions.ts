"use server";
import { Resend } from "resend";
import { UserRegistrationSchema, ContactFormEmailSchema } from "./schemas";
import ContactFormEmail from "@/email/contact-form-email";
import { db } from "@/firebase/config";
import { collection, doc, addDoc, setDoc } from "firebase/firestore";
import {
  UserRegistrationSchemaType,
  ContactFormEmailSchemaType,
} from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export const RegisterUserForEvent = async (
  userData: UserRegistrationSchemaType,
  eventName: string
) => {
  // store user info in firstore those who have registered for the event
  try {
    const parsedUserData = UserRegistrationSchema.safeParse(userData);
    console.log("the info provided is valid", parsedUserData);
    const docRef = await addDoc(collection(db, eventName), parsedUserData.data);
    console.log("Document written with ID: ", docRef.id);
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
