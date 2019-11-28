import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import isEmpty from "ramda/es/isEmpty";

import { MENU } from "../../routes";

const Home = () => (
  <div>
    Welcome to examples
    <ul>
      {MENU && !isEmpty(MENU)
        ? MENU.map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))
        : null}
    </ul>
  </div>
);

export default Home;
