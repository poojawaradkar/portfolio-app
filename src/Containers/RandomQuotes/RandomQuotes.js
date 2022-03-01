import React, { useState, useEffect, useRef } from 'react';

import SubHeader from 'Components/Shared/SubHeader/SubHeader';

import {
  Button, Fade, CircularProgress, Typography
} from 'widget';

import { getRandomQuote } from 'helpers/restApis';
import useIntersection from 'helpers/useIntersection';

import styles from './RandomQuotes.module.scss';

const RandomQuotes = () => {
  const ref = useRef();

  const inViewport = useIntersection(ref, '0px');
  const [animate, setAnimate] = useState(false);

  const [quoteData, setQuoteData] = useState(null);

  const getQuotes = () => {
    getRandomQuote()
      .then(resp => {
        const quoteNum = Math.floor(Math.random() * resp.length);
        const randomQuote = resp[quoteNum];
        setQuoteData(randomQuote);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    if (inViewport) {
      setAnimate(true);
    }
  }, [inViewport]);

  const handleClick = () => {
    getQuotes();
  };

  const getMarkup = () => {
    if (quoteData) {
      return (
        <div className={styles.holder}>
          <div className={styles.info}>
            <Typography
              classes={{
                root: styles.text
              }}
            >
              "
              {quoteData.text}
              "
            </Typography>
            {quoteData.author
              ? (
                <Typography
                  classes={{
                    root: styles.author
                  }}
                >
                  {' '}
                  -
                  {' '}
                  {quoteData.author}
                </Typography>
              )
              : null}
          </div>
          <Button
            classes={{
              root: styles.buttonStyle
            }}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Next Quote
          </Button>
        </div>

      );
    }
    return <CircularProgress className={styles.loaderStyle} />;
  };

  return (
    <Fade
      in={animate}
      easing="cubic-bezier(0.4, 0, 1, 1)"
      timeout={500}
      ref={ref}
    >
      <section id="quotes" className={styles.root}>
        <SubHeader
          headerText="QUOTES"
        />
        {getMarkup()}
      </section>
    </Fade>
  );
};

export default RandomQuotes;
