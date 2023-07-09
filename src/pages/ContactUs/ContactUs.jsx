import React from "react";
import { Container } from "react-bootstrap";
import {
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
const ContactUs = () => {
  return (
    <section className="contact py-3">
      <Container>
        <h1 className="fontsTitle colorRed display-3 fw-bold px-5">
          Contact Us
        </h1>

        <div className="icons mb-3 d-flex  justify-content-center py-3">
          <a href="">
            <BsFacebook color="#1778F2" className="w-100 h-100" />
          </a>
          <a href="">
            <BsInstagram color="#fff" />
          </a>
          <a href="">
            <BsTwitter color="#fff" />
          </a>
          <a href="">
            <BsWhatsapp color="#fff" />
          </a>
          <a href="">
            <BsYoutube color="#fff " />
          </a>
        </div>

        <br />
        <h1 className="fontsTitle colorRed display-6 text-center fw-bold px-5">
          Get In Touch
        </h1>
        <div className="flex-column d-flex align-items-center justify-content-center">
          <input type="text" placeholder="Your Number" />
          <input type="text" placeholder="Your Name" />
          <textarea placeholder="Your Message"></textarea>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
