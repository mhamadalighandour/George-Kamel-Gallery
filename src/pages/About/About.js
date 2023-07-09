import { Container } from "react-bootstrap";
import Img from "../../assets/aboutImg/1-1.png";
import Img2 from "../../assets/aboutImg/3-1.png";

const About = () => {
  return (
    <section className="py-3 about bgImg">
      <Container>
        <div className="w-75 mx-auto">
          <img src={Img} alt="" className="img-fluid" />
        </div>
        <CardAbout
          h1={"About Us"}
          p="Considering the art as a sea in its depths, and to dive into its details
              and inner beauty, George Kamel gallery was established in 2008,
              which focused on presenting various types of artworks collected from
              different places and made by the most prominent artists, it adopts
              many Syrian experiences and presents Adequate support for them."
        />
        <CardAbout
          h1=" MISSION:"
          p="George Kamel Gallery prepares his exhibition for all the pioneering
          Syrian experiences, and in fulfillment of the desire to shed light on
          the Syrian Fine art movement, contributes to promoting
          contemporary Syrian art and making it involved with the rest of
          Arab arts."
        />
        <CardAbout
          h1="VISON:"
          p="George Kamel Gallery strives to be the source of art, as it follows the
          most prominent cultural exhibitions. in addition to Prepare and
          qualify the appropriate atmosphere to show creativity in all its detail,
          it also aspires to serve its pioneers by being a bridge linking to the
          whole Arab world."
        />
      </Container>
    </section>
  );
};

export default About;

const CardAbout = (props) => {
  return (
    <div className="py-2">
      <div className="d-flex  align-items-center text-center text-lg-start">
        <div className="h-100">
          <img src={Img2} alt="" width={100} className="d-none d-lg-block" />
        </div>
        <div>
          <h1 className="display-5 fw-bold fontsTitle">
            <img src={Img2} alt="" width={100} className=" d-lg-none" />
            {props.h1}
          </h1>
          <p className="fs-6 fontsTitle fw-bold">{props.p}</p>
        </div>
      </div>
    </div>
  );
};
