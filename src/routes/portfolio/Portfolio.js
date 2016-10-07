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
import s from './Portfolio.css';

const title = 'Portfolio';

function Portfolio({news}, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className="container">
        <h1>Portfolio</h1>
        <div className="row">
          <div className="col s6 m6">
            <div className="card small">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="/nyt-news-scraper.png"/>
              </div>
              <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">NYT News Scraper<i
                className="material-icons right">more_vert</i></span>
                <p><a href="http://www.hectormanriquez.com:3002">NYT News Scraper</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">NYT News Scraper<i
                  className="material-icons right">close</i></span>
                <p>A simple NYT articles scraper that allows you to search for articles and save them to be able to view
                  them
                  later or just have them archived.</p>
              </div>
            </div>
          </div>
          <div className="col s6 m6">
            <div className="card small">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="/news-scraper.png"/>
              </div>
              <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">News Scraper<i
                className="material-icons right">more_vert</i></span>
                <p><a href="http://www.hectormanriquez.com:3001">News Scraper</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">News Scraper<i
                  className="material-icons right">close</i></span>
                <p>A simple hacker news articles scraper that allows you to view the articles posted on main page and
                  comment on them</p>
              </div>
            </div>
          </div>
          <div className="col s6 m6">
            <div className="card small">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="/tile.png"/>
              </div>
              <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">AnonyMeet<i
                className="material-icons right">more_vert</i></span>
                <p><a href="http://www.anonymeet.net">AnonyMeet</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">AnonyMeet<i
                  className="material-icons right">close</i></span>
                <p>Coming soon...</p>
                <p>A way to set up a meeting place anonymously with another person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Portfolio.contextTypes = {setTitle: PropTypes.func.isRequired};

export default withStyles(s)(Portfolio);
