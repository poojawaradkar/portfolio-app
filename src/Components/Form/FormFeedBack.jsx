import React from 'react';
import PropTypes from 'prop-types';
import styles from './formFeedBack.scss';

const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: PropTypes.string.isRequired,
  as: PropTypes.elementType,
};

const defaultProps = {
	variant: '',
	className: ''
};

const Feedback = React.forwardRef(
	({ as: Component = 'div', className, variant, ...props }, ref) => {

		className += ` ${styles['feedback']} ${styles[variant]}`;

		return (
			<Component
				{...props}
				ref={ref}
				className={className}
			/>
		);
	}
);

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;

export default Feedback;