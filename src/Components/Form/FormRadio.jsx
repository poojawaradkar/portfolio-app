import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import FormInput from './FormControl';
import AnimateOnHover from '../AnimateOnHover/AnimateOnHover';
import withRipple from '../Ripples/RipplesHOC';
import styles from './formRadio.scss';


const propTypes = {
    /**
     * The FormRadio `ref` will be forwarded to the underlying input element,
     * which means it will be a DOM node, when resolved.
     *
     * @type {ReactRef}
     * @alias ref
     */
    _ref: PropTypes.any,

    /** A HTML id attribute, necessary for proper form accessibility. */
    id: PropTypes.string,
    
    labelClass: PropTypes.string,
    as: PropTypes.elementType,
    disabled: PropTypes.bool,
    label: PropTypes.node,

    /** Manually style the input as valid */
    isValid: PropTypes.bool.isRequired,

    /** Manually style the input as invalid */
    isInvalid: PropTypes.bool.isRequired,

};

const defaultProps = {
    disabled: false,
    isValid: false,
    isInvalid: false
};

const FormRadio = React.forwardRef(
    (
        {
            id="radio"+Math.floor(new Date().getTime()*Math.random()),
            disabled,
            isValid,
            isInvalid,
            className="",
            labelClass="",
            style,
            label,
            type="",
            ...props
        },
        ref,
    ) => {
        const input = (
            <FormInput
                {...props}
                id={id}
                type='radio'
                ref={ref}
                className={styles["custom-radio"]}
                isValid={isValid}
                isInvalid={isInvalid}
                disabled={disabled}
            />
        );
        return (
                <label
                    for={id}
                    style={style}
                    className={`${className} ${styles['custom-radio-input']} ${disabled ? 
                        styles['input-disabled'] : ''} ${label ? props.rippleClass : ''} ${label 
                        ? styles['has-label'] : ''}`}
                    {...(label && props.rippleHandler)} 
                >
                    <>
                        {input}
                        <FormLabel 
                            className={`${styles["label-tag"]} ${labelClass}`}
                            for={id}
                        >
                            <span className={styles['label-span']}></span>
                            <AnimateOnHover className={styles["hover-over"]} variant='circle'/>
                            {label}
                        </FormLabel>
                        {label && props.renderRipple()}
                    </>
                </label>
        );
    },
);
FormRadio.displayName = 'FormRadio';
FormRadio.propTypes = propTypes;
FormRadio.defaultProps = defaultProps;

export default withRipple(FormRadio);

/*
@@@FormRadio{
	"author": "Pooja Waradkar",
	"componentName": "FormRadio",
	"version": "",
	"description": "For the non-textual radio controls, FormRadio provides a single component for both types that adds some additional styling and improved layout.",
	"props": {
        "ref": {
            "values": "",
			"dataType": "ReactRef",
			"defaultValue": "",
			"description": "The FormCheck ref will be forwarded to the underlying input element, which means it will be a DOM node, when resolved."
        },
        "id": {
            "values": "",
			"dataType": "string",
			"defaultValue": "(optional)",
			"description": "A HTML id attribute, necessary for proper form accessibility."
        },
        "label": {
            "values": "",
			"dataType": "node",
			"defaultValue": "",
			"description": ""
        },
        "checked": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "",
			"description": "Whether this radio button is checked."
        },
        "disabled": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "false",
			"description": "Whether the radio group is disabled"
        }
	},
	"code": "<div className='example-holder'>\n\t<Form.Radio className='input-row' name='radiobtn' label='Selected' labelClass='label-row' defaultChecked/>\n\t<Form.Radio className='input-row' name='radiobtn' label='Unselected' labelClass='label-row'/>\n\t<Form.Radio className='input-row' name='radiobtn' label='Disabled' labelClass='label-row' disabled/>\n</div>"
}@@@*/