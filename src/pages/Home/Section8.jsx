import { Container } from "react-bootstrap";
import Img from "../../assets/images/40-1.jpg";

const Section8 = () => {
  return (
    <h1 className="py-2">
      <Container>
        <img src={Img} alt="" className="w-100" />
      </Container>
    </h1>
  );
};

export default Section8;
