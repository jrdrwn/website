"use client";

import MyButton from "@components/button/MyButton";
import Footer from "@layouts/Footer";
import Hero from "@layouts/Hero";

export default function Home() {
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
      alert("Error when submiting the form");
    } else {
      alert("Success submiting the form");
      location.reload();
    }
  };
  return (
    <main className="bg-base-100 p-4 mx-auto">
      <Hero
        title={<>Let&apos;s connect with me online!</>}
        description={
          "If you have a project to collaborate on or just want to chat, you've come to the right place."
        }
        foregroundText={"Don't be shy to CONNECT"}
      />
      <section className="relative min-h-[100dvh] container mx-auto py-32  md:max-w-screen-lg">
        <form
          action=""
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
      <Footer />
    </main>
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
