import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Link } from "react-scroll";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" id="logo" />
        </Navbar.Brand>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon align-items-center">
              <a
                href="https://www.linkedin.com/in/markfreitaas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1}></img>
              </a>
              <a
                href="https://www.github.com/markfreitaas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2}></img>
              </a>
              <a
                href="https://www.instagram.com/omarkfreitas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3}></img>
              </a>
            </div>
            {/* <button className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              } onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button> */}
            <Link
              to="connect"
              smooth={true}
              duration={500}
              offset={-70}
              className="navbar-button"
              spy={true} // observa o scroll
            >
              <span>
                Entre em Contato <BsArrowRight size={25} />{" "}
              </span>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
