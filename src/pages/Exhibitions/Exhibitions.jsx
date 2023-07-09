import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../../assets/images/21-1.png";
import Img2 from "../../assets/images/22-1.png";
import Img3 from "../../assets/images/23-1.png";
import Img4 from "../../assets/images/24-1.png";
import Img5 from "../../assets/images/25-1.png";
import Img6 from "../../assets/images/26-1.png";
import Img7 from "../../assets/images/27-1.png";
import Img8 from "../../assets/images/28-1.png";

const Exhibitions = () => {
  return (
    <section className="sec_6 py-3">
      <Container>
        <h1 className="fontsTitle colorRed display-3 fw-bold">Exhibitions</h1>
        <Row>
          <CardImg
            img={Img1}
            h6={"White Roses of York VI"}
            spanOne={"Rhia Janta-Cooper"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img2}
            h6={"MOUNTAINS"}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img3}
            h6={"Blue Madness 2"}
            spanOne={"Edelgard Schroer"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img4}
            h6={"Blue Madness"}
            spanOne={"Edelgard Schroer"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img5}
            h6={"LUSCIOUS LEMONS AND LEMONA.."}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img6}
            h6={"FLOATING LEAF"}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img7}
            h6={"Tides Out 1"}
            spanOne={"Jeremy Shipton"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img8}
            h6={"Moulin Rouge"}
            spanOne={"Irina Rumyantseva"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img5}
            h6={"LUSCIOUS LEMONS AND LEMONA.."}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img6}
            h6={"FLOATING LEAF"}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img7}
            h6={"Tides Out 1"}
            spanOne={"Jeremy Shipton"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img8}
            h6={"Moulin Rouge"}
            spanOne={"Irina Rumyantseva"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img5}
            h6={"LUSCIOUS LEMONS AND LEMONA.."}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img6}
            h6={"FLOATING LEAF"}
            spanOne={"Gillian D'Ambrosio"}
            spanTwo={"Watercolours"}
          />
          <CardImg
            img={Img7}
            h6={"Tides Out 1"}
            spanOne={"Jeremy Shipton"}
            spanTwo={"Acrylic"}
          />
          <CardImg
            img={Img8}
            h6={"Moulin Rouge"}
            spanOne={"Irina Rumyantseva"}
            spanTwo={"Acrylic"}
          />
        </Row>
      </Container>
    </section>
  );
};

export default Exhibitions;

const CardImg = (props) => {
  return (
    <Col sm={6} md={4} lg={3} className="position-relative p-2">
      <img src={props.img} alt="" className="w-100" />
      <h6 className="my-2">{props.h6}</h6>
      <p className="mt-3 text-black-50">
        <span>{props.spanOne}</span> <br />
        <span className="d-block my-2">{props.spanTwo}</span>
      </p>
    </Col>
  );
};
