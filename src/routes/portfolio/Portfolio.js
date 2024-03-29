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
import s from './Portfolio.css';

const title = 'Portfolio';

function Portfolio({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Portfolio</h1>
        <ul className={s.news}>
          {news.map((item, index) => (
            <li key={index} className={s.newsItem}>
              <a href={item.link} className={s.newsTitle}>{item.title}</a>
              <span
                className={s.newsDesc}
                dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
              />
            </li>
          ))}
        </ul>
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
Portfolio.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Portfolio);
