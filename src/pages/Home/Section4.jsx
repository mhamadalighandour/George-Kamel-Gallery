import Img1 from "../../assets/images/15-1.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Section4 = () => {
  const [active, setActive] = useState("Press");
  return (
    <section className="sec_4 py-3">
      <div className="d-flex align-items-center justify-content-between container flex-wrap">
        <h1 className="fontsTitle colorRed display-3 fw-bold">ARTISTS</h1>
        <ul className="d-flex p-0  flex-wrap mx-auto">
          <li
            className={`${
              active === "Press" ? "active" : ""
            } ps-3 fs-6 fw-bold`}
            onClick={() => setActive("Press")}
          >
            Press
          </li>
          <li
            className={`${
              active === "Videos" ? "active" : ""
            } ps-3 fs-6 fw-bold`}
            onClick={() => setActive("Videos")}
          >
            Videos
          </li>
          <li
            className={`${active === "Past" ? "active" : ""} ps-3 fs-6 fw-bold`}
            onClick={() => setActive("Past")}
          >
            Past Exhibitions
          </li>
          <li
            className={`${
              active === "Biography" ? "active" : ""
            } ps-3 fs-6 fw-bold`}
            onClick={() => setActive("Biography")}
          >
            Biography
          </li>
        </ul>
      </div>
      <Row className="">
        <Col lg={4} className=" ">
          <ul className="d-flex flex-row flex-lg-column text-black-50 fs-5 fw-bold w-100  artists py-2 ">
            <li className="py-1 ps-4 active">
              <pre>Ghassan Alnana</pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Edward Shahda</pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Nassir Chaura </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Youssef abdalelke </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Aksam Tallaa </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Bassem Dahdouh </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Khaled ALNajjad </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Rula Abu Saleh </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Saad Yagan </pre>
            </li>
            <li className="py-1 ps-4">
              <pre>Sameer ALSafadi</pre>
            </li>
          </ul>
        </Col>
        <Col lg={8} className="d-flex align-items-center">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className={`${active === "Press" ? "" : "d-none"}`}
            slidesPerView={1}
            spaceBetween={5}
          >
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img src={Img1} className="w-75 imgslider" alt="" />
                <div className="position-absolute w-75 bottom-0 mb-2 bg-black50 px-3 text-light">
                  <h2 className="">title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img src={Img1} className="w-75 imgslider" alt="" />
                <div className="position-absolute w-75 bottom-0 mb-2 bg-black50 px-3 text-light">
                  <h2 className="">title</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className={`${active === "Videos" ? "" : "d-none"}`}
            slidesPerView={1}
            spaceBetween={5}
          >
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                {/* <img src={Img1} className="w-75 imgslider" alt="" /> */}
                <video className="rounded-2xl container mx-auto w-75" controls>
                  <source src="./video_2023-06-04_10-06-08.mp4" />
                </video>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                {/* <img src={Img1} className="w-75 imgslider" alt="" /> */}
                <video className="rounded-2xl container mx-auto w-75" controls>
                  <source src="./video_2023-06-04_10-06-08.mp4" />
                </video>
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className={`${active === "Past" ? "" : "d-none"}`}
            slidesPerView={1}
            spaceBetween={5}
          >
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img src={Img1} className="w-75 imgslider" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img src={Img1} className="w-75 imgslider" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Navigation]}
            navigation={true}
            className={`${active === "Biography" ? "" : "d-none"}`}
            slidesPerView={1}
            spaceBetween={5}
          >
            <SwiperSlide className="">
              <div className="d-flex flex-column justify-content-center w-100 mx-auto">
                <div className="d-flex  justify-content-center">
                  <img src={Img1} className="w-25 imgslider" alt="" />
                  <p className="w-50 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum totam dolorem perspiciatis
                    ut! Doloremque qui vitae doloribus asperiores nam nihil!
                    Lorem ipsum dolor sit amet consectLorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum
                  </p>
                </div>
                <div className=" w bottom-0 mb-2 px-3 w-75 mx-auto">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum totam dolorem perspiciatis
                    ut! Doloremque qui vitae doloribus asperiores nam nihil!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Cum totam dolorem perspiciatis
                    ut! Doloremque qui vitae doloribus asperiores nam nihil!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    totam dolorem perspiciatis ut! Doloremque qui vitae
                    doloribus asperiores nam nihil!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <p className="w-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  totam dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <p className="w-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  totam dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cum totam
                  dolorem perspiciatis ut! Doloremque qui vitae doloribus
                  asperiores nam nihil! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Cum totam dolorem perspiciatis ut!
                  Doloremque qui vitae doloribus asperiores nam nihil!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      <div className="ps-5">
        <Link to="/Our-Artist">
          <button className="mybtn">view all</button>
        </Link>
      </div>
    </section>
  );
};

export default Section4;
