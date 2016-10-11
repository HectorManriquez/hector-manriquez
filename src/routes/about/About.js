/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

const title = 'About Me';

function About(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className="container">
        <h1>{title}</h1>
        <div className="row">
          <div className="col s12 m4 l4 center-align">
            <img src="/me.jpg"/>
          </div>
          <div className="col s12 m8 l8">
            <ul className="collection">
              <li className="collection-item">Coder/developer by passion.</li>
              <li className="collection-item">Tech enthusiast.</li>
              <li className="collection-item">Strong believer in open source, iteration and
                improvement/optimization.
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div>
            My name is Hector and I am a looking to become a full stack developer.
            I believe in understanding all aspects of the stack to be a valuable asset no matter what I'm working on and
            to be able to move around as needed.
            I am constantly learning and adapting to the newer technologies and standards as is necessary.
          </div>
        </div>
        <div className="row">
          <h1>Technologies I've worked with</h1>
          <div className="col s12 m4 l4">
            <table>
              <thead>
              <tr>
                <th>Front End</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <img src="/html5.png"/>
                  HTML5
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/css3.png"/>
                  CSS3
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/javascript.png"/>
                  JavaScript
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/react.png"/>
                  React
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/jquery.png"/>
                  JQuery
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col s12 m4 l4">
            <table>
              <thead>
              <tr>
                <th>Back End</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <img src="/nodejs.png"/>
                  Node.js
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/java.png"/>
                  Java
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/python.png"/>
                  Python
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col s12 m4 l4">
            <table>
              <thead>
              <tr>
                <th>Databases</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <img src="/mongodb.png"/>
                  MongoDB
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/oracle.png"/>
                  Oracle
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/ibmdb2.png"/>
                  IBM DB2
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/sqlserver.png"/>
                  SQL Server
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/mysql.png"/>
                  MySQL
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

About.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(About);
