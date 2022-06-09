import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form
        className="form-control w-80 mx-auto"
        action="https://formsubmit.co/el/lowuki"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_next"
          value="https://rezaul-karim-portfolieo.herokuapp.com/"
        />
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label class="label">
          <span class="label-text">Email</span>
        </label>

        <input
          type="email"
          value={email}
          id="email"
          name="email"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label class="label">
          <span class="label-text">Message</span>
        </label>

        <textarea
          cols="10"
          rows="5"
          id="message"
          value={message}
          name="message"
          placeholder="Your message..."
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          class=" w-80  mx-auto btn btn-primary"
          type="submit"
          value="Submit"
        >
          {" "}
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
