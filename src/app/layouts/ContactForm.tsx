"use client";

import MyButton from "@components/button/MyButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@components/utils/Modal";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    message: "",
    onClose: () => {},
  });
  const [isOpen, setIsOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
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
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: "some" }}
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
            <MyButton>
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              )}
              Submit
            </MyButton>
          </div>
        </motion.form>
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
