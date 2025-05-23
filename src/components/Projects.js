import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";


export const Projects = () => {
  const projects = [
    {
      title: "Tindra",
      description:
        "TINDRA é uma landing page moderna de venda de veículos com foco em conversão, com geração automática de conteúdo via IA.",
      imgUrl: projImg1,
    },
    {
      title: "Tasty Burguer",
      description:
        "Tasty Burguer é uma aplicação web de pedidos de comida com integração com o WhatsApp.",
      imgUrl: projImg2,
    },
    {
      title: "Calculadora TMB",
      description:
        "Projeto de uma calculadora de TMB (Taxa Metabólica Basal) com o cáclculo da quantidade ideal de ingestão de água.",
      imgUrl: projImg3,
    },
  ];

  const projectsTabTwo = [
    {
      title: "Grão e Aroma",
      description:
        "Grão e Aroma é uma loja de café online fictícia com um design moderno, focada na experiência do usuário.",
      imgUrl: projImg4,
    },
    {
      title: "Card Generator",
      description:
        "Gerador de cartão de crédito com design moderno e responsivo, permitindo personalização fácil e rápida.",
      imgUrl: projImg5,
    },
    {
      title: "Upload Files",  
      description:
        "Upload de arquivos com drag and drop, permitindo o envio fácil e rápido de múltiplos arquivos com detalhes via Console",
      imgUrl: projImg6,
    },
  ];

  const projectsTabThree = [
    {
      title: "Stock Manager",
      description:
        "Stock Manager é um sistema de gerenciamento de estoque com funcionalidades de CRUD, histórico de movimentação e com data e hora da venda.",
      imgUrl: projImg7,
    },
    {
      title: "ClimaAgora",
      description:
        "ClimaAgora é um aplicativo de previsão do tempo real com design moderno e responsivo, utilizando a API OpenWeather.",
      imgUrl: projImg8,
    },
    {
      title: "Nikel",
      description:
        "Nikel é um aplicativo de gerenciamento financeiro com funcionalidades de controle de despesas e receitas, com autenticação de cadastro e login.",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Aqui estão alguns dos meus projetos recentes. Trabalhei em uma
              variedade de projetos, desde pequenos projetos pessoais até
              grandes projetos em equipe. Cada um deles me ajudou a crescer como
              desenvolvedor e a aprender novas habilidades.
            </p>
            <Tab.Container defaultActiveKey="first">
              <Nav variant="pills" className="justify-content-center mb-5">
                <Nav.Item>
                  <Nav.Link eventKey="first" id="projects-tabs-tab-first">
                    Tab One
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="projects-tabs-tab-second">
                    Tab Two
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" id="projects-tabs-tab-third">
                    Tab Three
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projectsTabTwo.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projectsTabThree.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background gradient"
      />
    </section>
  );
};
