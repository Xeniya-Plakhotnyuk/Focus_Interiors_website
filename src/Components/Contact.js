import React from "react";
import Form from "./Form";
import Info from "./Info";

import "aos/dist/aos.css";

function Contact() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <Form />

      <Info />
    </div>
  );
}

export default Contact;
