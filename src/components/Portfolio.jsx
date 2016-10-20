import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import '../App.css';

class Portfolio extends Component {
  render() {

    const projects = this.props.route.data;

    const projectDetails = projects.map((project) => {
      return (
        <Col xs={6} md={4} key={project.id}>
          <Thumbnail src={project.media} alt="242x200">
            <h3>{project.name}</h3>
            <h4>{project.technologies}</h4>
            <p>{project.description}</p>
            <p>
              <Button href={project.github} bsStyle="primary">Github</Button>&nbsp;
              <Button href={project.production} bsStyle="default">Production</Button>
            </p>
          </Thumbnail>
        </Col>      )
    });

    return (
      <div>
        <h1>Portfolio</h1>
        <div className="list-group">
          <Grid>
            <Row>
              {projectDetails}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Portfolio;
