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

const title = 'Contact';

function Contact(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className="container">
        <h1>Email Me Directly</h1>
        <a href="mailto:hector.j.manriquez@gmail.com">Hector.j.manriquez@gmail.com</a>
        <h1>Send A Message</h1>
        <form action="/contact" method="post">
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
              required
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
              required
            />
          </div>
          <div className={s.formGroup}>
            <label className={s.label} htmlFor="subject">
              Subject:
            </label>
            <input
              className={s.input}
              id="subject"
              type="text"
              name="subject"
              required
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
              required
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
