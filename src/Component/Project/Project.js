import React, { Component } from 'react';
import './Project.css';

import Card from '../Card/Card'

class Project extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="project-container"> 
        <div className="row">
          <h2> My Projects </h2>
        </div>
          <div className="row">
            <Card>
              Pianoo
              loremlemloremloremoremlemloremloremoremlemloremlorem
            </Card>
            <Card>
              Masion-Autiler
              <p>loremloremloremloremloremloremloremloremlorem</p>
            </Card>
          </div>
          <div className="row">
          <Card>
              Project-Clio
              <p>loremloremloremloremloremloremloremloremlorem</p>
              <p>loremloremloremloremloremloremloremloremlorem</p>
            </Card>
            <Card>
              Weather Forecast
              <p>loremloremloremloremloremloremloremloremlorem</p>
              <p>loremloremloremloremloremloremloremloremlorem</p>
            </Card>
          </div>
        </div>
    );
  }
}

export default Project;
