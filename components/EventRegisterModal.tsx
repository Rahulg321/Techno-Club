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
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

export default function EventRegisterButton({
  EventName,
}: {
  EventName: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const classes = [
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
  ];

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
                <h3 className="underline">{EventName}</h3>
                Registeration Form
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <IoMdPerson className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="University Roll Number"
                  placeholder="Enter your roll number"
                  type="number"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <FaPhone className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Enter your WhatsApp Number"
                  placeholder="Enter your phone number"
                  type="number"
                  variant="bordered"
                />
                <Select
                  label="Select your course"
                  className="max-w w-full"
                  variant="bordered"
                  startContent={<MdComputer />}
                >
                  {classes.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <Input
                  endContent={
                    <IoMdMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email address"
                  type="email"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
