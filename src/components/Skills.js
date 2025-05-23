import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Possuo um conjunto diversificado de habilidades que inclui
                desenvolvimento front-end e back-end, além de design. <br></br> Sou
                proficiente em HTML, CSS, JavaScript, React, Node.js e muito
                mais. <br></br> Estou sempre ansioso para aprender novas tecnologias e
                aprimorar minhas habilidades.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill 1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 2" />
                  <h5>Brand Identify</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill 3" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 4" />
                  <h5>UX/UI Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill 4" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 4" />
                  <h5>Node.JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 4" />
                  <h5>Javascript</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
