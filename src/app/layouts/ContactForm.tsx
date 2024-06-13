"use client";

import MyButton from "@components/button/MyButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@components/utils/Modal";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [modal, setModal] = useState({
    title: "",
    message: "",
    onClose: () => {},
  });
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setModal({
        title: "Error",
        message: "Failed to submit the form. Please try again later.",
        onClose: () => setIsOpen(false),
      });
    } else {
      setModal({
        title: "Success",
        message: "Your message has been sent successfully.",
        onClose: () => setIsOpen(false),
      });
      formRef.current?.reset();
    }
    setIsOpen(true);
  };
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContent>
          <ModalHeader title={modal.title} onClose={modal.onClose} />
          <ModalBody>
            <p className="text-base-content-100">{modal.message}</p>
          </ModalBody>
        </ModalContent>
      </Modal>
      <section className="relative min-h-[100dvh] container mx-auto py-32  md:max-w-screen-lg">
        <form
          ref={formRef}
          className="flex flex-col gap-12"
          onSubmit={handleSubmit}
        >
          <TextInputForm name="name" label="name" placeholder="Your name" />
          <TextInputForm
            name="email"
            label="email"
            placeholder="Your email"
            type="email"
          />
          <div>
            <TextAreaForm
              name="message"
              label="message"
              placeholder="Your message"
            />
            <CheckboxForm
              name="accept"
              label="I aggre with the terms of the Privacy Policy"
              className="mt-4"
            />
          </div>
          <div>
            <MyButton>Submit</MyButton>
          </div>
        </form>
      </section>
    </>
  );
}

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

function TextInputForm(props: TextInputProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="text-base-content-100 after:content-['*'] after:ml-1 after:text-red-300"
      >
        {props.label}
      </label>
      <input
        type={props.type || "text"}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className="rounded-lg bg-primary-container border-2 border-secondary py-4 focus:ring-0 focus:border-primary-on-container text-primary-on-container placeholder:text-secondary"
        required={true}
        autoComplete="off"
      />
    </div>
  );
}
interface TextAreaProps {
  name: string;
  label: string;
  placeholder: string;
}

function TextAreaForm(props: TextAreaProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={props.name}
        className="text-base-content-100 after:content-['*'] after:ml-1 after:text-red-300 "
      >
        {props.label}
      </label>
      <textarea
        rows={8}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        className="rounded-lg bg-primary-container border-2 border-secondary py-4 focus:ring-0 focus:border-primary-on-container text-primary-on-container placeholder:text-secondary"
        required={true}
        autoComplete="off"
      />
    </div>
  );
}
interface CheckboxProps {
  name: string;
  label: string;
  className?: string;
}

function CheckboxForm(props: CheckboxProps): React.ReactElement {
  return (
    <div className={props.className}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        className="form-checkbox rounded-md bg-primary-container border-2 border-secondary p-3 focus:ring-0 focus:border-primary-on-container text-xs"
        required={true}
      />
      <label
        htmlFor={props.name}
        className="text-base-content-100 after:content-['*'] ml-3  after:ml-1 after:text-red-300 font-light"
      >
        {props.label}
      </label>
    </div>
  );
}
