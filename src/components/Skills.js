import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import coreldraw from "../assets/img/corellogo.png";
import reactLogo from "../assets/img/react.png";
import nodelogo from "../assets/img/nodejs.png";
import javascript from "../assets/img/javascript.png";
import logodesign from "../assets/img/logodesign.png";
import vuejs from "../assets/img/vuejs.png";
import tailwindcss from "../assets/img/tailwindcss.png";
import webdev from "../assets/img/webdev.png";

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
                desenvolvimento front-end e back-end, além de design. <br></br>{" "}
                Sou proficiente em HTML, CSS, JavaScript, React, Node.js e muito
                mais. <br></br> Estou sempre ansioso para aprender novas
                tecnologias e aprimorar minhas habilidades.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={tailwindcss} alt="Skill 1" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={webdev} alt="Skill 1" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={vuejs} alt="Skill 2" />
                  <h5>VueJS</h5>
                </div>
                <div className="item">
                  <img src={logodesign} alt="Skill 3" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={coreldraw} alt="Skill 4" />
                  <h5>CorelDraw</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="Skill 4" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={nodelogo} alt="Skill 4" />
                  <h5>Node.JS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="Skill 4" />
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
