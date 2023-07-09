import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiFileCopyLine } from "react-icons/ri";
import Img1 from "../../assets/images/29-1.png";
import Img2 from "../../assets/images/30-1.png";
import Img3 from "../../assets/images/31-1.png";
import Img4 from "../../assets/images/32-1.png";
import Img5 from "../../assets/images/33-1.png";
import Img6 from "../../assets/images/34-1.png";
import Img7 from "../../assets/images/35-1.png";
import Img8 from "../../assets/images/36-1.png";
const MediaCenter = () => {
  return (
    <section className="sec_7 py-3 ">
      <Container>
        <h1 className="fontsTitle colorRed display-3 fw-bold">MEDIA CENTER</h1>
        <Row className="m-auto">
          <CardImg img={Img1} />
          <CardImg img={Img2} />
          <CardImg img={Img3} />
          <CardImg img={Img4} />
          <CardImg img={Img5} />
          <CardImg img={Img6} />
          <CardImg img={Img7} />
          <CardImg img={Img8} />
          <CardImg img={Img1} />
          <CardImg img={Img2} />
          <CardImg img={Img3} />
          <CardImg img={Img4} />
          <CardImg img={Img5} />
          <CardImg img={Img6} />
          <CardImg img={Img7} />
          <CardImg img={Img8} />
          <CardImg img={Img1} />
          <CardImg img={Img2} />
          <CardImg img={Img3} />
          <CardImg img={Img4} />
          <CardImg img={Img5} />
          <CardImg img={Img6} />
          <CardImg img={Img7} />
          <CardImg img={Img8} />
        </Row>
      </Container>
    </section>
  );
};

export default MediaCenter;

const CardImg = (props) => {
  const [showImg, setShowImg] = useState("");
  return (
    <Col sm={6} md={4} lg={3} className="position-relative ">
      <img
        src={props.img}
        alt=""
        className={`w-100 m-2  ${showImg.className ? "active" : "scale"}`}
        onClick={(e) => setShowImg(e.target)}
      />
      <RiFileCopyLine className="position-absolute" />
      <div className="dark" onClick={() => setShowImg("")}></div>
    </Col>
  );
};
