import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mail from "../../Assets/Projects/himalya.PNG";
import editor from "../../Assets/Projects/Bluemercurry.PNG";
import kettoimg from "../../Assets/Projects/gymshark.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={kettoimg}
              isBlog={false}
              title="GymShark Clone "
              description="We have created a clone of e-commerce website GymShark. And we have implemented all the functionality and features similar to real website."
              link="https://github.com/abhich21/Gymshark_FRONTEND_Unit4"
              tech=" HTML, CSS, JavaScript"
              duration=" 1 Week"
              Features="Sign-In/Sign-Up, Details of Products, SearchBar for Navigation"
              // linkmedium="https://avinashrexx.hashnode.dev/cloning-of-agoda-website"
              linklive="https://gymshark-team-shark.vercel.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Himalya Clone"
              duration=" 1 Week"
              description="Cloned Himalya is an USA products e-commercial website, used by people to buy different kinds of cosmetic products.  "
              tech=" HTML, CSS, JavaScript"
              link="https://github.com/abhich21/Himalaya-clone"
              linkmedium=""
              linklive="https://himalayacwproject.netlify.app/"
              Features=" Log-In/Sign-Up, Add to Cart and filter functionality "
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              duration=" 1 Week"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from."
              tech=" HTML, CSS, JavaScript,LocalStorage"
              link="https://github.com/iampiyushkr/bluemercuryClonn"
              linkmedium="https://imankush7.hashnode.dev/cloning-bluemercury"
              linklive="https://bluemercurryclone.netlify.app"
              Features=" Sign-In/Sign-Up,Product Section Page,Add/Remove items in cart "
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
