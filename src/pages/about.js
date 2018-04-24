import React from "react";
import Photo from "../small/photo";
import { Link, Route } from "react-router-dom";

const About = ({ match }) => {
  return (
    <div>
      <h2>This is about component</h2>
      <ul>
        <li>
          <Link to={`${match.url}/haekal`}>haekal</Link>
        </li>
        <li>
          <Link to={`${match.url}/miftah`}>miftah</Link>
        </li>
        <li>
          <Link to={`${match.url}/dedek`}>dedek</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:person`} component={Photo} />
    </div>
  );
};

export default About;
