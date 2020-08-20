import React, { Component } from "react";
import Title from "./Title";
import Econtent from "./Econtent";

export default class Education extends Component {
  render() {
    return (
      <>
        <Title titleText="EDUCATION" />
        <div>
          <Econtent
            cYear="2014-2018"
            cCollege="Knowledge Institute of Technology, Salem"
            cDegree="B.E Mechnical Engineering"
            cMark="CGPA : 6.52"
          />
        </div>
      </>
    );
  }
}
