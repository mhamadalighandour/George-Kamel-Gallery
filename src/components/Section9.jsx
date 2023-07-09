import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LogoF from "../assets/images/38-1.png";
import ICR from "../assets/images/IMG_20220812_231756_740-removebg-preview.png";
import {
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Section9 = () => {
  return (
    <footer className="sec_9 bgImg">
      <Container>
        <Row className="d-flex align-items-center justify-content-center flex-wrap footer py-3">
          <Col lg={6} className="d-flex flex-column">
            <img src={LogoF} alt="" className="w-75 fimg mb-3" />
            <div className="d-flex align-items-center justify-content-between text-light w-75 flex-wrap">
              <ul className="d-flex flex-column">
                <li className="px-2 fw-bold">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/Events">Events</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/Exhibitions">Exhibitions</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/Our-Artist">Our Artist</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/NEWS">NEWS</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="/Media-Center">Media Center</NavLink>
                </li>
                <li className="px-2 fw-bold">
                  <NavLink to="Contact-us">Contact us</NavLink>
                </li>
              </ul>
              <ul className="d-flex flex-column">
                <li className="active">Resources</li>
                <li>Search the Collection</li>
                <li>Conservation</li>
                <li>Library</li>
                <li>Archives</li>
                <li>The Center</li>
                <li>Audio/Video</li>
                <li>Open Access Images</li>
              </ul>
            </div>
          </Col>
          <Col lg={6} className="text-light">
            <h1 className="fontsTitle display-2 colorRed fw-bold mb-5 text-center">
              CONTACT US
            </h1>
            <div className="text-center">
              <p>
                Damascus,Mazzeh,Eastren Villas,Across to the Arab Writers Union
              </p>
              <p>دمشق , المزة , مزة فيلات شرقي , خلف اتحاد الكتاب العرب</p>
            </div>
            <div className="icons d-flex">
              <ul className=" mx-auto fs-5">
                <a href="##">
                  <BsFacebook color="#fff" className="mx-2" />
                </a>
                <a href="##">
                  <BsInstagram color="#fff" className="mx-2" />
                </a>
                <a href="##">
                  <BsTwitter color="#fff" className="mx-2" />
                </a>
                <a href="##">
                  <BsWhatsapp color="#fff" className="mx-2" />
                </a>
                <a href="##">
                  <BsYoutube color="#fff" className="mx-2" />
                </a>
              </ul>
            </div>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="d-flex flex-column cont">
                <span>Email : info@gkgallery.com</span>
                <span>Web : www.gkgallery.com</span>
                <span className="mt-4">Tel: 00963 1 611295</span>
              </div>
              <div className="d-flex flex-column cont">
                <span>facebook : george kamel gallery</span>
                <span>insta : george kamel_gallery</span>
                <span className="mt-4">
                  Mob : <span>00963 944 931 379 </span>
                  <span className="d-block ms-5">00963 944 410 641</span>
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-light text-center py-3">
          <p>
            @ 2023 George Kamal Gallery OF ART NOTICES TERMS OF USE PRIVACY
            POLICY
          </p>
          Devloped and designed by
          <span className="p-1">
            <a href="https://www.facebook.com/ICRCompanyPro" target="-blank">
              <img
                src={ICR}
                alt=""
                style={{ width: "30px", cursor: "pointer" }}
              />
            </a>
          </span>
          <h5 className="py-2">
            <a href="##">IdeaCodeReality.ICR@gmail.com : للتواصل</a>
          </h5>
        </div>
      </Container>
    </footer>
  );
};

export default Section9;
