import React from "react";
import Image from "../../assets/images/5-1.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="sec_2 bgImg py-3">
      <Container className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-around flex-wrap">
          <img src={Image} alt="" className="" width="40%" />
          <div className="text-center text-light">
            <h1 className="fontsTitle colorRed display-2 fw-bold">ABOUT US</h1>
            <h4 className="fontsTitle py-3">
              GEORGE KAMEL GALLERY WAS ESTABLISHED
            </h4>
            <p>
              IN 2008, WHICH FOCUSED ON PRESENTING VARIOUS <br /> TYPES OF
              ARTWORKS
            </p>
            <Link to="/about" className="">
              <button className="mybtn my-5">READ MORE</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section2;
