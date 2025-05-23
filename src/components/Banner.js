import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import headerImg from "../assets/img/image.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`I'm FrontEnd `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Sou um desenvolvedor web apaixonado com talento para criar
              aplicativos dinâmicos e responsivos. Adoro transformar ideias em
              realidade usando as tecnologias mais recentes.
            </p>
            {/* <button className="connect-banner" onClick={() => console.log("connect")}>
                            Let's Connect <BsArrowRight size={25} />
                        </button> */}
            <Link
              to="connect"
              smooth={true}
              duration={500}
              offset={-70}
              className="connect-banner"
              spy={true} // observa o scroll
            >
              <span>
                Vamos Conversar <BsArrowRight size={25} />
              </span>
            </Link>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} className="perfil-photo" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
