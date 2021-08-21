import React from "react";
import SubHeader from "../Shared/SubHeader/SubHeader";
import Container from "../Layout/Container";
import "./eduction.scss";
const Education = () => {
  const eduArr = [
    {
      type: "Bachelor of Computer Science",
      timeline: "2012-06 - 2016-06",
      instituteName: "St. John College Of Engineering And Technology",
      percentile: "Graduated with 8.75 CGPI",
    },
    {
      type: "Higher Secondary Certificate: Computer Science",
      timeline: "2011-06 - 2012-01",
      instituteName: "Utkarsha Vidyalaya",
      percentile: "Secured 87.67%",
    },
    {
      type: "Secondary School Certificate",
      timeline: "2009-06 - 2010-06",
      instituteName: "AVS Vidyamandir",
      percentile: "Secured 93.45%",
    },
  ];
  const getEducationMarkup = () => {
    return eduArr.map((cur, index) => {
      return (
        <article
          className="timeline-entry"
          data-animate-effect="fadeInLeft"
          key={`article-${index}`}
        >
          <div className="timeline-entry-inner">
            <div className="timeline-icon color-5">
              <svg viewBox="0 0 54 54" className={`color-${index + 1}`}>
                <circle cx="27" cy="27" r="26"></circle>
                <path
                  transform="translate(11,11)"
                  d="M30.96 22.58v-9.217l.503-.303c.327-.194.533-.58.537-1 .004-.421-.196-.81-.518-1.014L16.44 1.848a.893.893 0 0 0-.967.004l-14.96 9.21c-.318.202-.515.587-.513 1.005.002.417.203.8.525.998l6.573 3.999a1.256 1.256 0 0 0-.133.56v9.669c0 .325.122.637.335.853.217.22 2.294 2.146 8.646 2.146 6.33 0 8.463-1.82 8.686-2.028a1.21 1.21 0 0 0 .367-.884v-9.917c0-.16-.03-.313-.082-.452l4.044-2.441v8.016c-.593.396-.995 1.124-.995 1.965 0 1.262.895 2.285 2 2.285 1.104 0 1.999-1.023 1.999-2.285 0-.845-.407-1.576-1.005-1.97zM23 26.725c-.787.432-2.866 1.282-7.054 1.282-4.214 0-6.246-.905-6.982-1.34v-8.468l6.493 3.95a.892.892 0 0 0 .937.006L23 18.17v8.556zm-7.06-6.876L3.08 12.045l12.881-7.89 12.922 7.868L15.94 19.85z"
                ></path>
              </svg>
            </div>
            <div className="timeline-label">
              <h2>
                {cur.type}
                <span> {cur.timeline}</span>
              </h2>
              <p>{cur.instituteName}</p>
              <p>{cur.percentile}</p>
            </div>
          </div>
        </article>
      );
    });
  };
  return (
    <Container className="card">
      <SubHeader headerText="EDUCATION" as="h2" />
      {getEducationMarkup()}
    </Container>
  );
};
export default Education;
