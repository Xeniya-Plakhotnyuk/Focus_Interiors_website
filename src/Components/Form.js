import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xqkopkzr");

  if (state.succeeded) {
    return <p className="title_text_about">Thanks for your message!</p>;
  }

  return (
    <div>
      <h2 className="title_text_about">Send us a message</h2>
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Doe"
            className="form-input"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="form-input"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="message">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="How can we help you? Or you us?"
            className="form-input"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="form-submit"
          >
            Submit
          </button>
        </div>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}

export default Form;
