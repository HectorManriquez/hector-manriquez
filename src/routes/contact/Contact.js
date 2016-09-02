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
import s from './Contact.css';

const title = 'Contact Me';

function Contact(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <form method="post">
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="name">
              Name:
            </label>
            <input
              className={s.input}
              id="name"
              type="text"
              name="name"
              autoFocus
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="email">
              Email address:
            </label>
            <input
              className={s.input}
              id="email"
              type="text"
              name="email"
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="message">
              Your message:
            </label>
            <textarea
              className={s.inputTextArea}
              id="message"
              type="text"
              name="message"
              rows="4"
            />
          </div>
          <div className={s.formGroup}>
            <button className={s.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Contact.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Contact);
