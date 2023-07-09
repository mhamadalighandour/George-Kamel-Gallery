import { Col, Container, Row } from "react-bootstrap";
import { ViewPano } from "../../components/index";
import { useState } from "react";

import ImgPano from "../../assets/images/8-1.jpg";
import Img1 from "../../assets/images/9-1.png";
import Img2 from "../../assets/images/10-1.png";
import Img3 from "../../assets/images/11-1.png";
import Img4 from "../../assets/images/12-1.png";
import Img5 from "../../assets/images/13-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Events = () => {
  const [active, setActive] = useState();
  return (
    <section className="py-3 events ">
      <Container>
        <div>
          <h1 className="fontsTitle colorRed display-2 fw-bold">Events</h1>
          <div className="px-3">
            <h1 className="fontsTitle colorRed display-6 fw-bold m-0">
              EDWARD SHAHDA
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur Badipisicing elit. <br />{" "}
              Explicabo, assumenda. Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>
        </div>
        <div
          className=" w-75 mx-auto py-3 img-pano"
          style={{ height: "500px" }}
        >
          {active ? (
            <img src={active} alt="" className=" " width="100%" height="100%" />
          ) : (
            <ViewPano />
          )}
        </div>
        <Swiper
          className="w-50 d-flex"
          loop={true}
          slidesPerView={1.5}
          spaceBetween={5}
          slidesPerGroup={1}
          breakpoints={{
            678: {
              slidesPerView: 4,
            },
            500: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="">
            <div>
              <img
                src={Img1}
                className="w-100"
                alt=""
                onClick={() => setActive(Img1)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img
                src={Img2}
                className="w-100"
                alt=""
                onClick={() => setActive(Img2)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img
                src={Img3}
                className="w-100"
                alt=""
                onClick={() => setActive(Img3)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img
                src={Img4}
                className="w-100"
                alt=""
                onClick={() => setActive(Img4)}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div>
              <img
                src={Img5}
                className="w-100"
                alt=""
                onClick={() => setActive(Img5)}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <Row className="d-flex flex-wrap w-100 gap-4 justify-content-center">
          <div
            className={`${active === "" ? "active" : ""} CardImage py-2`}
            onClick={() => setActive("")}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={ImgPano} onClick={() => setActive("")} />
          </div>
          <div
            className={`${active === Img1 ? "active" : ""}  CardImage py-2`}
            onClick={() => setActive(Img1)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img1} />
          </div>
          <div
            className={`${active === Img2 ? "active" : ""}  CardImage py-2`}
            onClick={() => setActive(Img2)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img2} />
          </div>
          <div
            className={`${active === Img3 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img3)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img3} />
          </div>
          <div
            className={`${active === Img4 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img4)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img4} />
          </div>
          <div
            className={`${active === Img5 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img5)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img5} />
          </div>
          <div
            className={`${active === Img1? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img1)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img1} />
          </div>
          <div
            className={`${active === Img2 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img2)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img2} />
          </div>
          <div
            className={`${active === Img3 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img3)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img3} />
          </div>
          <div
            className={`${active === Img4 ? "active" : ""} CardImage py-2`}
            onClick={() => setActive(Img4)}
            style={{ cursor: "pointer" }}
          >
            <CardImage img={Img4} />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Events;
const CardImage = (props) => {
  return (
    <>
      <img src={props.img} alt="" className="img-fluid h-75 " />
      <h6 className="m-2">painting name</h6>
    </>
  );
};
