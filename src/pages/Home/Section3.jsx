import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Img1 from "../../assets/images/9-1.png";
import Img2 from "../../assets/images/10-1.png";
import Img3 from "../../assets/images/11-1.png";
import Img4 from "../../assets/images/12-1.png";
import Img5 from "../../assets/images/13-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ViewPano } from "../../components/index";
import { Link } from "react-router-dom";

const Section3 = () => {
  const [active, setActive] = useState("");
  return (
    <section className="sec-3">
      <h1 className="fontsTitle colorRed display-3 fw-bold px-5">Events</h1>
      <div className=" sec_3 bgImg my-2 py-3">
        <Container>
          <Row className=" d-flex align-items-center justify-content-around flex-wrap">
            <Col lg={5} className="mypano order-2 order-lg-1">
              <div className="w-100 py-3" style={{ height: "400px" }}>
                {active ? (
                  <img src={active} alt="" className=" " width="100%" />
                ) : (
                  <ViewPano />
                )}
              </div>
            </Col>
            <Col
              lg={7}
              className="text-center  d-flex flex-column fw-bold align-items-center justify-content-center order-0 order-lg-2"
            >
              <span className="text-black-50">
                under the patonage of the ministr of culture
              </span>
              <h1 className="fontsTitle py-3"> George Kamel Gallery</h1>
              <span className="text-black-50">
                Invite You To Attend The Exhibition
              </span>
              <h4 className="fontsTitle colorRed py-2 m-0">EDWARD SHAHDA</h4>
              <span className="text-black-50">
                On Saturday 11 jun 2023 at 6:00 pm till 30 jun 2023
              </span>
              <span className="text-black-50 py-2">
                Daily From 11:30 Am To 7:00 Pm{" "}
              </span>
              <p>
                Damascus,Mazzeh,Eastren Villas,Across to the Arab Writers Union
              </p>
              <span className="text-black">
                <span className="mx-3">Tel: 00963 11 6112965 </span>
                <span>Mob: 00963 944 931 379 / 00963 944 410 641</span>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container d-flex align-items-center justify-content-between">
        <Swiper
          className="myswiper d-flex"
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
        <div className="text-end">
          <Link to="/Events">
            <button className="mybtn">view all</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
