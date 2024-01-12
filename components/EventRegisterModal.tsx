"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { UserRegistrationSchema } from "@/app/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUserForEvent } from "@/app/actions";
import toast from "react-hot-toast";
import { UserRegistrationSchemaType } from "@/app/types";

export default function EventRegisterButton({
  eventName,
  eventVenue,
  eventDate,
}: {
  eventName: string;
  eventVenue: string;
  eventDate: string;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const courses = [
    {
      label: "BCA",
      value: "bca",
    },
    {
      label: "MCA",
      value: "mca",
    },
    {
      label: "BTECH",
      value: "btech",
    },
    {
      label: "MTECH",
      value: "mtech",
    },
    {
      label: "BCOM",
      value: "bcom",
    },
    {
      label: "MBA",
      value: "mba",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
    control,
  } = useForm<UserRegistrationSchemaType>({
    resolver: zodResolver(UserRegistrationSchema),
  });

  const onSubmit = async (data: UserRegistrationSchemaType) => {
    // send data to the server
    const response = await RegisterUserForEvent(
      data,
      eventName,
      eventVenue,
      eventDate
    );
    if (response.success) {
      // close the modal after successful registration!!!
      reset();
      onClose();
      toast.success("you have been successfully registered for the event!!");
    }

    if (response.error) {
      toast.error("Failure! Please provide valid input or try again later");
    }
    // reset();
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        startContent={<BsPencilSquare />}
        className="hover:-translate-y-2 transition"
      >
        Register Now
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h3 className="underline">{eventName}</h3>
                Registeration Form
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Controller
                    name="course"
                    control={control}
                    rules={{ required: true }} // Add your validation rules here
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Select
                        label="Select your course"
                        placeholder="Select a course"
                        className="w-full"
                        onBlur={onBlur}
                        onChange={onChange}
                        errorMessage={
                          errors.course && "Selecting a course is required"
                        }
                        selectedKeys={value ? [value] : []}
                      >
                        {courses.map((course) => (
                          <SelectItem key={course.value} value={course.value}>
                            {course.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />

                  <Input
                    {...register("rollNumber")}
                    endContent={
                      <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Roll Number"
                    placeholder="Enter your roll Number"
                    type="text"
                    variant="bordered"
                    errorMessage={errors.rollNumber?.message}
                    isInvalid={errors.rollNumber ? true : false}
                  />
                  <Input
                    {...register("phoneNumber")}
                    endContent={
                      <FaPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Phone Number"
                    placeholder="Enter your phone Number"
                    type="text"
                    variant="bordered"
                    errorMessage={errors.phoneNumber?.message}
                    isInvalid={errors.phoneNumber ? true : false}
                  />
                  <Input
                    {...register("email")}
                    endContent={
                      <IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email address"
                    type="text"
                    variant="bordered"
                    errorMessage={errors.email?.message}
                    isInvalid={errors.email ? true : false}
                  />

                  <Button
                    color="primary"
                    type="submit"
                    isDisabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting" : "Submit"}
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
