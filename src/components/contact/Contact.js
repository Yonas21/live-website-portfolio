import React, { useRef } from "react";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import "./contact.css";
import emailjs from "emailjs-com";
import {  motion, useInView } from "framer-motion";
import { contact } from "../../models";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const contactRef = useRef();

  const contactInView = useInView(contactRef, { once: true });

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <motion.div
        className="container contact__container"
        initial={{ opacity: 0 }}
        animate={contactInView && { opacity: 1 }}
        transition={{ delay: 0.4, duration: 2.3 }}
        ref={contactRef}
      >
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className="contact-icon" />
            <h4>Email</h4>
            <h5>{contact.email}</h5>
            <a href={`mailto:${contact.email}`} target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact-icon" />
            <h4>Telegram</h4>
            <h5>{contact.telegram}</h5>
            <a href={`{contact.telegram}`} target="_blank">
              send a message
            </a>
          </article>

          <article className="contact__option">
            <MdCall className="contact-icon" />
            <h4>Call</h4>
            <h5>{contact.phone}</h5>
            <a href={`tel:${contact.phone}`}>Ring the bell</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
