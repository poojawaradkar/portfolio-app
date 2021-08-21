import React, { useState, useEffect } from 'react';

import { getRandomQuote } from '../../helpers/restApis';

const RandomQuotes = () => {
  const [quoteData, setQuoteData] = useState(null);

  const getQuotes = () => {
    getRandomQuote()
      .then(resp => {
        let quoteNum = Math.floor(Math.random() * resp.length);
        let randomQuote = resp[quoteNum];
        setQuoteData(randomQuote);
      })
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const getMarkup = () => {
    if (quoteData) {
      return (<div>
        <img src={"https://picsum.photos/1024/768?blur=1"} alt="" />
        <div>{quoteData.text}</div>
      </div>)
    }
    return null;
  }

  return getMarkup();
}

export default RandomQuotes;
