import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/HalicChain.jpg";
import projImg2 from "../assets/img/Punky.png";
import projImg3 from "../assets/img/MeFi.jpg";
import projImg4 from "../assets/img/Bilpengo.jpg";
import projImg5 from "../assets/img/Onedio.jpg";
import projImg6 from "../assets/img/Yoorbit.jpg";
import projImg7 from "../assets/img/Genex.jpg";
import projImg8 from "../assets/img/CoinTalks.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Halic Chain",
      description: "Co-Founder · Mar 2022 - Present · 10 mos",
      imgUrl: projImg1,
    },
    { 
      title: "Punky Discord Bot",
      description: "Discord Developer · Nov 2023 - Present · 1 mos  ",
      imgUrl: projImg2,
    },
    {
      title: "Bilpengo",
      description: "Co-Founder, CTO · Mar 2022 - ∞ · ∞ mos",
      imgUrl: projImg4,
    },
    {
      title: "Me-Fi Guild",
      description: "Full Stack Engineer · Sep 2022 - Nov 2022 · 2 mos",
      imgUrl: projImg3,
    },
    {
      title: "Onedio",
      description: "Gaming & Blockchain Gaming Content Creator · Aug 2021 - Mar 2022 · 8 mos",
      imgUrl: projImg5,
    },
    {
      title: "Yoorbit",
      description: "Marketing · Apr 2022 - Present · 9 mos",
      imgUrl: projImg6,
    },
    {
      title: "Genex Project NFT",
      description: "Project Manager & Marketing · Apr 2022 - Jun 2022 · 3 mos",
      imgUrl: projImg7,
    },{
      title: "CoinTalks",
      description: "Blockchain Content Creator · Sep 2022 - Present · 4 mos",
      imgUrl: projImg8,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>I show you to all the big and small Experience</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
