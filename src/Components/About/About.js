import React, { useState, useEffect, useRef } from 'react';

import SubHeader from 'Components/Shared/SubHeader/SubHeader';

import { Grid, Slide } from 'widget';

import useIntersection from 'helpers/useIntersection';

import styles from './About.module.scss';

const About = () => {
  const containerRef = useRef(null);
  const ref = useRef(null);

  const inViewport = useIntersection(ref, '-200px');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inViewport) {
      setAnimate(true);
    }
  }, [inViewport]);

  return (
    <section
      ref={containerRef}
      id="about"
      className={styles.root}
    >
      <SubHeader headerText="ABOUT" />
      <Grid
        container
        spacing={2}
        ref={ref}
        className={styles.aboutGrid}
      >
        <Slide
          direction="down"
          in={animate}
          container={containerRef.current}
          {...(animate ? { timeout: 500 } : {})}
          style={{ transitionDelay: animate ? '200ms' : '0ms' }}
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
        </Slide>

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
        <Slide
          direction="up"
          in={animate}
          {...(animate ? { timeout: 500 } : {})}
          container={containerRef.current}
          style={{ transitionDelay: animate ? '200ms' : '0ms' }}
        >
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
        </Slide>
      </Grid>

      <div className={styles.aboutMeSection}>
        <div className={styles.hexBox}>
          <img
            alt="about-me"
            src={require('assets/images/aboutMe.jpg')}
            className={styles.aboutMeImg}
          />
        </div>
        <div className={styles.aboutInfo}>
          <div className={styles.subHeading}>Passionate web developer based in India</div>
          <div className={styles.para}>I enjoy designing and programming web applications that exceed expectations. I've developed a strong passion for software development industry over the years and love what I do. I am always looking to improve my skill set and provide value to an organisation.</div>
        </div>
      </div>
    </section>
  );
};
export default About;
