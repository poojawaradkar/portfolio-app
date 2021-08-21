import React from "react";

import SubHeader from "../Shared/SubHeader/SubHeader";

const Introduction = () => {
  return (
    <div className="cover-image" style={{ backgroundImage: "url(images/4.jpg)" }}>
      <div className="sub-title">
        <em>Hey, I'm</em>
      </div>
      <SubHeader headerText="POOJA WARADKAR" variant="light" as="h1" />
    </div>
  );
};

export default Introduction;
