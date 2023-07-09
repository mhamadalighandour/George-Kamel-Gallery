import { Link } from "react-router-dom";
import Img1 from "../../assets/images/17-1.png";
import { Col, Container, Row } from "react-bootstrap";

const News = () => {
  return (
    <section className="sec_5 bgImg py-3 ">
      <Container>
        <h1 className="fontsTitle colorRed display-3 fw-bold">NEWS</h1>
        <Row className="">
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
          <Col lg={3} md={6}>
            <CardImg
              img={Img1}
              h3={"HAPPENING NOW"}
              p={
                "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default News;
const CardImg = (props) => {
  return (
    <div className="mb-2">
      <div className="p-1 w-100 h-100">
        <img src={props.img} alt="" className="w-100" />
        <div className="bg-light position-relative d-flex flex-column">
          <h6
            className="bg-light py-4 px-2 position-absolute"
            style={{
              textAlign: "center",
              top: "-28px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              border: "1px solid #aaa",
            }}
          >
            {props.h3}
          </h6>
          <p
            className="text-black-50 px-2 py-4  m-0 "
            style={{ fontSize: "14px" }}
          >
            {props.p.substring(0, 75)}...
          </p>
          <div className="text-end">
            <Link to="/news/id">
              <button
                className="mybtn mx-2 mb-2 "
                style={{ padding: "5px", fontSize: "14px", fontWeight: "500" }}
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
