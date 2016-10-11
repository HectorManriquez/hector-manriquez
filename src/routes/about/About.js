/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

const title = 'About Me';

function About(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className="container">
        <h1>Email Me Directly</h1>
        <img src="/me.jpg" className="center-align" />
        <p>
          Coder and developer by passion.

          Tech and open source enthusiast.

          My name is Hector and I am an avid and strongly skilled individual in coding.
          I am currently delving deeper into full stack web development but am also comfortable in working in any other stack that is not web oriented.
          I am a strong believer in the fundamentals and am always adapting to the current standards and technologies as is necessary.
          I am a strong believer in open source, iteration and improvement/optimization.

          I am currently enrolled at the Coding Bootcamp at UT Austin to quench my thirst for knowledge and to gain more insight into full stack web development.</p>
      </div>
    </div>
  );
}

About.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(About);
