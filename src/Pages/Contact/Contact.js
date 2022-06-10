import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3roxsrr",
        "template_dslfsc1",
        e.target,
        "eu-zy7O8qalVs2SuX"
      )
      .then(
        (result) => {
          alert("Thanks for Contact");
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className="form-control w-80 mx-auto" onSubmit={handleSubmit}>
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
          class="input input-bordered"
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
          class="input input-bordered"
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
          class="input input-bordered"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          class=" w-80  mx-auto btn btn-primary mt-5 "
          type="submit"
          value="Submit"
        >
          {" "}
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
