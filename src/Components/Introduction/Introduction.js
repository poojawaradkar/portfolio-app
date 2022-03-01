import React from 'react';
import Typography from '@mui/material/Typography';

import { HeaderSvg } from 'Components/Shared/Icons';

import styles from './Introduction.module.scss';

const Introduction = () => (
  <>
    <header>
      <div className={styles.wrapper}>
        <span className={styles.greeting}>Hello there!</span>
        <span className={styles.name}>I'm Pooja</span>
        <span className={styles.tagline}>I make cool websites.</span>
        <span className={styles.action}>LET ME  SHOW  YOU!</span>
      </div>

      <a href="#quotes" className={styles.projectsLink}>
        <Typography classes={{
          root: styles.linkStyle
        }}
        >
          Random Quotes
        </Typography>
      </a>
      <a
        href="https://github.com/poojawaradkar"
        target="_blank"
        className={styles.githubLink}
        rel="noreferrer"
      >
        <Typography classes={{
          root: styles.linkStyle
        }}
        >
          Github

        </Typography>
      </a>
      <a href="#about" className={styles.aboutLink}>
        <Typography classes={{
          root: styles.linkStyle
        }}
        >
          About
        </Typography>
      </a>
      <a href="#contact" className={styles.contactLink}>
        <Typography classes={{
          root: styles.linkStyle
        }}
        >
          Contact
        </Typography>
      </a>
      <a
        href="/portfolio-app/PoojaWaradkarResume.pdf"
        target="_blank"
        rel="noreferrer"
        className={styles.resumeLink}
      >
        <Typography classes={{
          root: styles.linkStyle
        }}
        >
          Résumé
        </Typography>
      </a>
    </header>

    <HeaderSvg className={styles.svgStyle} />
  </>
);

export default Introduction;
