import React from "react";
import "./sub-header.scss";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * The underlying HTML element to use when rendering the FormControl.
   *
   * @type {('input'|'textarea'|'select'|elementType)}
   */
  as: PropTypes.elementType,

  headerText: PropTypes.string,
  variant: PropTypes.string,
};

const SubHeader = (props) => {
  const { as: Component = "div" } = props;
  return (
    <div className="content-wrapper">
      <Component className={`title animated ${props.variant}`}>{props.headerText}</Component>
    </div>
  );
};

SubHeader.propTypes = propTypes;
SubHeader.defaultProps = {
  headerText: "",
  variant: "dark",
};
export default SubHeader;
