import "./Contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_csq4t6k",
        "template_wi1lrsq",
        refForm.current,
        "I_tMrRkNF_LkmtGRk"
      )
      .then(
        () => {
          alert("Message successfully sent!");
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Curious? Let’s Connect.</h1>
        <p>we’re excited to hear from you.</p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="your name" />
            <input type="email" name="email" placeholder="email" />
            <textarea name="message" placeholder="message" />
            <button className="contact-button" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
