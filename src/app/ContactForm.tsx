"use client";

import FormControl from "@/components/FormControl";
import { FC, useRef, FormEventHandler, useState } from "react";

const ContactForm: FC<{ className: string }> = ({ className }) => {
  const name = {
    ref: useRef<HTMLInputElement>(null),
    props: { isActive: useState(false), invalidFormat: useState(false) },
  };
  const email = {
    ref: useRef<HTMLInputElement>(null),
    props: { isActive: useState(false), invalidFormat: useState(false) },
  };
  const message = {
    ref: useRef<HTMLTextAreaElement>(null),
    props: { isActive: useState(false), invalidFormat: useState(false) },
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!name.ref.current) return;
    [name, email, message].forEach((input) => {
      if (input.ref.current?.checkValidity()) {
        input.props.isActive[1](true);
      } else input.props.invalidFormat[1](true);
    });
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <FormControl
        isActive={name.props.isActive[0]}
        invalidFormat={name.props.invalidFormat[0]}
      >
        <input
          type="text"
          placeholder="name"
          name="name"
          maxLength={50}
          ref={name.ref}
          required
        />
      </FormControl>
      <FormControl
        isActive={email.props.isActive[0]}
        invalidFormat={email.props.invalidFormat[0]}
      >
        <input
          type="email"
          placeholder="email"
          name="email"
          maxLength={100}
          ref={email.ref}
          required
        />
      </FormControl>
      <FormControl
        isActive={message.props.isActive[0]}
        invalidFormat={message.props.invalidFormat[0]}
      >
        <textarea
          placeholder="message"
          rows={5}
          maxLength={2000}
          ref={message.ref}
          required
        />
      </FormControl>
      <button type="submit" className="btn ms-auto">
        send message
      </button>
    </form>
  );
};

export default ContactForm;
