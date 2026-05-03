import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="ParentsEye (School Tracking System)"
              description="Worked on a real-time school transport tracking system. Built responsive UI, integrated APIs for live tracking updates, and improved performance for smooth user experience. (Tech: React, Redux Toolkit, REST APIs)"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="RocketSales Tracker"
              description="Developed features for a sales team tracking platform with real-time location monitoring and task management. Focused on reusable components and API integration for dynamic data. (Tech: React, Axios, JWT)"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Credence Tracker (Fleet Management System)"
              description="Contributed to a GPS-based fleet tracking solution for transport operations. Implemented dashboards for vehicle tracking, route monitoring, and data visualization. (Tech: React, Redux Toolkit, REST APIs)"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
