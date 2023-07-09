import React from "react";
import { Container, Row } from "react-bootstrap";
import Img1 from "../../assets/images/17-1.png";
import Img2 from "../../assets/images/18-1.png";
import Img3 from "../../assets/images/19-1.png";
import Img4 from "../../assets/images/20-1.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <section className="sec_5 bgImg py-3 ">
      <Container>
        <h1 className="fontsTitle colorRed display-3 fw-bold">NEWS</h1>
        <Row className="">
          <Swiper
            modules={[Pagination]}
            className=" position-relative "
            spaceBetween={5}
            pagination={{ clickable: true }}
            breakpoints={{
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              420: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1.2,
              },
            }}
          >
            <SwiperSlide className="mb-0">
              <CardImg
                img={Img1}
                h3={"HAPPENING NOW"}
                p={
                  "IT WAS OUR PLEASURE TO MEET ALL OF YOU TODAY, STAY TUNED TO SEE MORE DETAILS"
                }
              />
            </SwiperSlide>
            <SwiperSlide className="mb-0">
              <CardImg
                img={Img2}
                h3={"WHITE DESIRES"}
                p={
                  "FROM THE OPENING OF THE SYRIAN ARTIST SALAH HREEB FIRST SOLO EXHIBITION"
                }
              />
            </SwiperSlide>
            <SwiperSlide className="mb-0">
              <CardImg
                img={Img3}
                h3={"NASSIR CHAURA"}
                p={
                  "(DAMASCUS 1920-1992) BEGAN DRAWING IN SCHOOL AND MOVED TO ITALY"
                }
              />
            </SwiperSlide>
            <SwiperSlide className="mb-0">
              <CardImg
                img={Img4}
                h3={"EDWARD SHAHDA"}
                p={
                  "GEORGE KAMEL GALLERY CELEBATES A SPECIAL CELEBRATION FOR THE ARTIST AND CREATOR EDWARD CHAHED"
                }
              />
            </SwiperSlide>
            <SwiperSlide className="mb-0">
              <CardImg
                img={Img4}
                h3={"EDWARD SHAHDA"}
                p={
                  "GEORGE KAMEL GALLERY CELEBATES A SPECIAL CELEBRATION FOR THE ARTIST AND CREATOR EDWARD CHAHED"
                }
              />
            </SwiperSlide>
          </Swiper>
        </Row>
        <Link to="/news">
          <div className="text-end m-2">
            <button className="mybtn">view all</button>
          </div>
        </Link>
      </Container>
    </section>
  );
};

export default Section5;

const CardImg = (props) => {
  return (
    <div className="mb-5">
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
            <Link to="/News/id">
              <button
                className="mybtn mx-2 mb-2  "
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
