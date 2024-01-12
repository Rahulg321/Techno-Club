"use client";

import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { Input, Textarea } from "@nextui-org/react";
import { IoMdMail } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { useForm } from "react-hook-form";
import { ContactFormEmailSchema } from "@/app/schemas";
import { ContactFormEmailSchemaType } from "@/app/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormInquiry } from "@/app/actions";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
    control,
  } = useForm<ContactFormEmailSchemaType>({
    resolver: zodResolver(ContactFormEmailSchema),
  });

  const onSubmit = async (data: ContactFormEmailSchemaType) => {
    console.log(data);
    const response = await ContactFormInquiry(data);

    if (response.success) {
      toast.success(response.success);
    }
    if (response.error) {
      toast.error(response.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mt-2"
    >
      <Input
        {...register("name")}
        endContent={
          <IoMdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="bordered"
        errorMessage={errors.name?.message}
        isInvalid={errors.name ? true : false}
      />
      <Input
        {...register("email")}
        endContent={
          <IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Email"
        placeholder="Enter your email address"
        type="email"
        variant="bordered"
        errorMessage={errors.email?.message}
        isInvalid={errors.email ? true : false}
      />

      <Textarea
        {...register("message")}
        variant="bordered"
        label="Message"
        isRequired
        placeholder="Write your message here"
      />

      <Button
        color="primary"
        className="hover:-translate-y-2 transition"
        type="submit"
        isDisabled={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
