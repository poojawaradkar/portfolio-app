import React from 'react';

import SubHeader from 'Components/Shared/SubHeader/SubHeader';

import { Grid } from 'widget';

import styles from './About.module.scss';

const About = () => (
  <section id="about" className={styles.root}>
    <SubHeader headerText="ABOUT" />
    <Grid
      container
      spacing={2}
      className={styles.aboutGrid}
    >
      <Grid
        item
        xs={12}
        md={4}
      >
        <div className={styles.skillItem}>
          <div className={styles.heading}>Responsive</div>
          <div
            className={styles.info}
          >
            A responsive design makes your website accessible to all users, regardless of their device.
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      >
        <div className={styles.skillItem}>
          <div className={styles.heading}>Intuitive</div>
          <div
            className={styles.info}
          >
            Strong preference for easy to use, intuitive UX/UI.
          </div>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      >
        <div className={styles.skillItem}>
          <div className={styles.heading}>Dynamic</div>
          <div
            className={styles.info}
          >
            Websites don't have to be static, I love making pages come to life.
          </div>
        </div>
      </Grid>
    </Grid>
  </section>
);
export default About;
