import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={12} className="text-center">
          <div className="social-icon align-items-center">
              <a href="https://www.linkedin.com/in/markfreitaas/" target="_blank">
                <img src={navIcon1}></img>
              </a>
              <a href="https>//www.github.com/markfreitaas" target="_blank">
                <img src={navIcon2}></img>
              </a>
              <a href="https://www.instagram.com/omarkfreitas/" target="_blank">
                <img src={navIcon3}></img>
              </a>
            </div>
            </Col>
          <Col sm={12} className="text-center">
            <h6>&copy; 2025. All Rights Reserved.</h6>
          </Col>
          <Col sm={12} className="text-end">
          <p>Designed by Marcelo L. Freitas</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
