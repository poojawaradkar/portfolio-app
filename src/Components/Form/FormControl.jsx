import React from 'react';
import PropTypes from 'prop-types';
import styles from './formControl.scss';

const propTypes = {
	/**
	 * Input size variants
	 *
	 * @type {('sm'|'lg')}
	 */
	size: PropTypes.string,
  
	/**
	 * The underlying HTML element to use when rendering the FormControl.
	 *
	 * @type {('input'|'textarea'|'select'|elementType)}
	 */
	as: PropTypes.elementType,
  
	/** Make the control readonly */
	readOnly: PropTypes.bool,
  
	/** Make the control disabled */
	disabled: PropTypes.bool,
  
	/**
	 * The `value` attribute of underlying input
	 *
	 * @controllable onChange
	 * */
	value: PropTypes.string,
  
	/** A callback fired when the `value` prop changes */
	onChange: PropTypes.func,
  
	/**
	 * The HTML input `type`, which is only relevant if `as` is `'input'` (the default).
	 */
	type: PropTypes.string,
  
	/**
	 * Uses `controlId` from `<FormGroup>` if not explicitly specified.
	 */
	// id: PropTypes.string,
  
	/** Add "valid" validation styles to the control */
	variant: PropTypes.string
};

const handleChange = () => {

}
  
const FormControl = React.forwardRef(
    (
        {
            type,
            size,
            id,
            className,
            plaintext,
            notEditable,
			as: Component = 'input',
			rightIcon,
			variant,
            ...props
        },
        ref,
    ) => {

		className += ` ${styles['form-control']} ${styles[size]} ${styles[variant]}`;

		if(Component === 'textarea') {
			className += ` ${styles['form-textarea']}`;
		}

		if(notEditable) {
			className += ` ${styles['read-only']}`;
		}

        return (
            <Component
				{...props}
                type={type}
                ref={ref}
                readOnly={notEditable || props.readOnly}
                id={id}
                className={className}
            />
        );
    }
);

FormControl.displayName = 'FormControl';
FormControl.propTypes = propTypes;

FormControl.defaultProps = {
	size: 'md',
	className: ''
}

export default FormControl;
