import React from "react";
import SubHeader from "../Shared/SubHeader/SubHeader";
import Container from "../Layout/Container";
import Row from "../Layout/Row";
import "./art.scss";
const Art = () => {
  const imageArr = [
    {
      name: "images/8.jpg",
    },
    {
      name: "images/9.jpg",
    },
    {
      name: "images/11.jpg",
    },
    {
      name: "images/12.jpg",
    },
    {
      name: "images/15.jpg",
    },
    {
      name: "images/16.jpg",
    },
    {
      name: "images/17.jpg",
    },
    {
      name: "images/18.jpg",
    },
    {
      name: "images/20.jpg",
    },
    {
      name: "images/23.jpg",
    },
  ];
  const getImageMarkup = () => {
    return imageArr.map((cur, index) => {
      return (
        <div className="img-wrapper" key={`image-${index}`}>
          {/* <img src={cur.name}/> */}
          <div className="image-bg" style={{ backgroundImage: `url(${cur.name})` }}></div>
        </div>
      );
    });
  };
  return (
    <Container className="card">
      <SubHeader headerText="Art means the world to me" as="h2" />
      <Row className="art-wrapper">{getImageMarkup()}</Row>
    </Container>
  );
};

export default Art;
