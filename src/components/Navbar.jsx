import React from "react";
import Logo from "../assets/images/1-1.png";
import Search from "../assets/images/2-1.png";
import {
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-around flex-wrap py-1 ">
      <img src={Logo} alt="" width={170} />
      <div className="text-center flex-grow-1 ">
        <div className="text-center w-100">
          <img src={Search} alt="" width={50} />
          <input
            type="search"
            placeholder="search..."
            className=" border-r py-2 px-3 fs-6 w-75"
          />
        </div>
      </div>
      <div className="icons text-center">
        <ul className="fs-5 p-0 m-0 mx-auto text-center w-100">
          <a href="##">
            <BsFacebook color="#000" className="mx-2" />
          </a>
          <a href="##">
            <BsInstagram color="#000" className="mx-2" />
          </a>
          <a href="##">
            <BsTwitter color="#000" className="mx-2" />
          </a>
          <a href="##">
            <BsWhatsapp color="#000" className="mx-2" />
          </a>
          <a href="##">
            <BsYoutube color="#000" className="mx-2" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
