"use client";

import SubmitButton from "../SubmitButton/SubmitButton";
import { sendContactFormEmail } from "@/app/actions";
import toast from "react-hot-toast";
import { Input, Textarea } from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

const ContactForm = () => {
  return (
    <form
      action={async (formData) => {
        // toast('sending message');
        const response = await sendContactFormEmail(formData);
        if (response.success) {
          toast.success("successfully send message");
        }

        if (response.error) {
          toast.error("Could not send message");
        }
      }}
      className="flex flex-col gap-3"
    >
      <Input
        type="text"
        isRequired
        fullWidth
        placeholder="your name"
        startContent={<IoPerson size="25" />}
      />
      <Input
        type="email"
        isRequired
        label="Email"
        placeholder="you@example.com"
        startContent={<CiMail size="25" />}
      />

      <Textarea
        label="Message"
        isRequired
        placeholder="Write your message here"
      />

      <SubmitButton buttonCaption="Submit" />
    </form>
  );
};

export default ContactForm;
