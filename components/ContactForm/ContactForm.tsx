"use client";

import { Button } from "@nextui-org/react";
import { sendContactFormEmail } from "@/app/actions";
import toast from "react-hot-toast";
import { Input, Textarea } from "@nextui-org/react";
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";

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
      className="flex flex-col gap-3 mt-2"
    >
      <Input
        autoFocus
        isRequired
        endContent={
          <IoMdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="bordered"
      />
      <Input
        isRequired
        endContent={
          <IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Enter your email address"
        type="email"
        variant="bordered"
      />

      <Textarea
        variant="bordered"
        label="Message"
        isRequired
        placeholder="Write your message here"
      />

      <Button color="primary" className="hover:-translate-y-2 transition">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
