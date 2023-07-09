import React from "react";
import { Container } from "react-bootstrap";

const Section1 = () => {
  return (
    <section className="sec_1 bgImg">
      <Container className="d-flex align-items-center h-100">
        <div className="text-light">
          <h1 className="fontsTitle display-6 fw-bold ">
            GEORGE KAMEL GALLERY
          </h1>
          <p className="fs-4 position-relative px-3">
            <span className="position-absolute"></span>
            For art obsessive, Discover your art visuon <br />
            at Georg Kamal Gallery. Damascus-Syria
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Section1;
