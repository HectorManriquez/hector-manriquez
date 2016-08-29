/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrlGH from './images/logo-small-github.png';
import logoUrlLI from './images/logo-small-li.png';
import logoUrlSO from './images/logo-small-so.png';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav}/>
        <a target="_blank" href="https://github.com/Keitarokido">
          <img src={logoUrlGH} width="38" height="38" alt="GitHub"/>
        </a>
        <span className={s.spacer}> | </span>
        <a target="_blank" href="https://www.linkedin.com/in/hectormanriquez">
          <img src={logoUrlLI} width="48" height="38" alt="Linked In"/>
        </a>
        <span className={s.spacer}> | </span>
        <a target="_blank" href="http://stackoverflow.com/users/6288637/keitarokido">
          <img src={logoUrlSO} width="38" height="38" alt="Stack Overflow"/>
        </a>
        {/*<Link className={s.brand} to="/about">*/}
          {/*<span className={s.brandTxt}>Hector Manriquez</span>*/}
        {/*</Link>*/}
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>Hector Manriquez</h1>
          <p className={s.bannerDesc}>Full Stack Developer. All Around Game Changer.</p>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
