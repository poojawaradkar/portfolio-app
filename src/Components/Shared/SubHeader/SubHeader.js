import React from 'react';

import './SubHeader.scss';

const SubHeader = props => (
  <div className="heading">
    {props.headerText}
  </div>
);

export default SubHeader;
