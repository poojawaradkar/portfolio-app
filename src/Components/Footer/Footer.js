import React from 'react';

import {
  GitHub, Codepen, LinkedIn, Mail, FooterSvg
} from 'Components/Shared/Icons';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer id="contact" className={styles.root}>
    <FooterSvg
      className={styles.footerSvgStyle}
    />
    <div className={styles.linkHolder}>
      <a
        href="https://github.com/poojawaradkar"
        target="_blank"
        rel="noreferrer"
        className={styles.linkStyle}
      >
        <GitHub
          className={styles.icon}
          fill="#ffffff"
        />
      </a>
      <a
        href="https://codepen.io/poojawaradkar"
        target="_blank"
        rel="noreferrer"
        className={styles.linkStyle}
      >
        <Codepen
          className={styles.icon}
          fill="#ffffff"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pooja-waradkar-270787a4"
        target="_blank"
        rel="noreferrer"
        className={styles.linkStyle}
      >
        <LinkedIn
          className={styles.icon}
          fill="#ffffff"
        />
      </a>
      <a
        href="mailto:pooja.waradkar022@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={styles.linkStyle}
      >
        <Mail
          className={styles.icon}
          fill="#ffffff"
          width="30px"
        />
      </a>
      <div className={styles.footnote}>
        POOJA WARADKAR
        {' '}
        <span className={styles.highlight}>©2022</span>
      </div>
    </div>
  </footer>
);

export default Footer;
