import Img1 from "../../assets/images/17-1.png";
import { Col, Container, Row } from "react-bootstrap";

const NewsItem = () => {
  return (
    <section className="sec_5 py-3">
      <Container>
        <Row className="">
          <Col md={5} sm={12}>
            <img src={Img1} alt="" className="img-fluid" />
          </Col>
          <Col md={7} sm={12}>
            <div className="flex flex-column align-items-center ">
              <h6 className="fontsTitle colorRed display-5 fw-bold">
                HAPPENING NOW
              </h6>
              <p className="text-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam placeat libero voluptatem eum facere quaerat optio
                nulla facilis quae ipsam vel sunt temporibus magni,
                necessitatibus consequatur ipsum architecto iusto corrupti.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam placeat libero voluptatem eum facere quaerat optio
                nulla facilis quae ipsam vel sunt temporibus magni,
                necessitatibus consequatur ipsum architecto iusto corrupti.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam placeat libero voluptatem eum facere quaerat optio
                nulla facilis quae ipsam vel sunt temporibus magni,
                necessitatibus consequatur ipsum architecto iusto corrupti.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam placeat libero voluptatem eum facere quaerat optio
                nulla facilis quae ipsam vel sunt temporibus magni,
                necessitatibus consequatur ipsum architecto iusto corrupti.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsItem;
