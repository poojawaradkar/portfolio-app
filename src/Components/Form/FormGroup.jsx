import PropTypes from 'prop-types';
import React from 'react';
import styles from './formGroup.scss';

const propTypes = {
  as: PropTypes.elementType,

  /**
   * The FormGroup `ref` will be forwarded to the underlying element.
   * Unless the FormGroup is rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: PropTypes.any,
};

const FormGroup = React.forwardRef(
  (
    {
      bsPrefix,
      className,
      children,
      controlId,
      as: Component = 'div',
      ...props
    },
    ref,
  ) => {
    className += ' ' + styles['form-group'];
    
    return (
      <Component
        {...props}
        ref={ref}
        className = {className}
      >
        {children}
      </Component>
    );
  },
);

FormGroup.defaultProps = {
  className: ''
}

FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = propTypes;

export default FormGroup;
