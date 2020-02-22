import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import FormInput from './FormControl';
import AnimateOnHover from '../AnimateOnHover/AnimateOnHover';
import withRipple from '../Ripples/RipplesHOC';
import styles from './formCheck.scss';

const propTypes = {
    /**
     * The FormCheck `ref` will be forwarded to the underlying input element,
     * which means it will be a DOM node, when resolved.
     *
     * @type {ReactRef}
     * @alias ref
     */
    _ref: PropTypes.any,

    /** A HTML id attribute, necessary for proper form accessibility. */
    id: PropTypes.string,

    labelClass: PropTypes.string,
    
    /** Whether the label should appear after or before the checkbox. Defaults to 'after'  */
    labelPosition: PropTypes.string,

    as: PropTypes.elementType,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    indeterminate: PropTypes.bool,

    /** Manually style the input as valid */
    isValid: PropTypes.bool.isRequired,

    /** Manually style the input as invalid */
    isInvalid: PropTypes.bool.isRequired,

};

const defaultProps = {
    disabled: false,
    indeterminate: false,
    isValid: false,
    isInvalid: false
};

const FormCheck = React.forwardRef(
    (
        {
            id="checkBox"+Math.floor(new Date().getTime()*Math.random()),
            disabled,
            isValid,
            isInvalid,
            className="",
            labelClass="",
            labelPosition="after",
            style,
            label,
            type="",
            variant="primary",
            product="",
            ...props
        },
        ref,
    ) => {
        const [animationClass, updateClass] = useState("");
        useEffect(()=> {
            if(props.checked){
                updateClass("indeterminate-checked-animation");
            } else {
                updateClass("");
            }
        }, [props.indeterminate]);
        const input = (
            <FormInput
                {...props}
                id={id}
                type='checkbox'
                ref={ref}
                className={`${styles["custom-check-box"]} ${props.indeterminate ? styles["indeterminate"] : ''}`}
                isValid={isValid}
                isInvalid={isInvalid}
                disabled={disabled}
            />
        );
        return (
                <label
                    for={id}
                    style={style}
                    className={`${className} ${styles['custom-checkbox']} ${styles[variant]} ${styles[product]} ${styles['label-'+(labelPosition=='before' ? 'before' : '') ]} ${disabled ? styles['input-disabled'] : ''} ${label ? props.rippleClass : ''} ${styles[animationClass]} ${label ? styles['has-label'] : ''}`}
                    {...(label && props.rippleHandler)} 
                    onClick={(e) => e.stopPropagation()}
                >
                    <>
                        {input}
                        <FormLabel
                            for={id} 
                            className={`${styles["label-tag"]} ${labelClass} ${type == 'circle' ? styles["circle-label"] : '' }`}
                            
                        >
                            <div className={styles['label-holder']}>
                                <span className={styles['label-span']}>
                                    <svg className={styles['svg-holder']} viewBox="0 0 24 24">
                                        <path 
                                            fill="none" 
                                            stroke="white" 
                                            d={'M5,13 9,17 19,7'}
                                            className={`${styles['svg-path']} ${styles['checked-path']}`}
                                        ></path>
                                        <line 
                                            className={`${styles['svg-path']} ${styles['partial-selection']}`} 
                                            x1="7" y1="12" 
                                            x2="17" y2="12"
                                        />
                                    </svg>
                                </span>
                                <AnimateOnHover className={styles["hover-over"]} variant='circle'/>
                            </div>
                            {label}
                        </FormLabel>
                        {label && props.renderRipple()}
                    </>
                </label>
        );
    },
);
FormCheck.displayName = 'FormCheck';
FormCheck.propTypes = propTypes;
FormCheck.defaultProps = defaultProps;

export default withRipple(FormCheck);

/*
@@@FormCheck{
	"author": "Pooja Waradkar",
	"componentName": "FormCheck",
	"version": "",
	"description": "For the non-textual checkbox and radio controls, FormCheck provides a single component for both types that adds some additional styling and improved layout.",
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
        "type": {
            "values": "circle",
			"dataType": "string",
			"defaultValue": "",
			"description": "The shape type of checkbox."
        },
        "label": {
            "values": "",
			"dataType": "node",
			"defaultValue": "",
			"description": ""
        },
        "labelClass": {
            "values": "",
			"dataType": "string",
			"defaultValue": "",
			"description": "Class name for checkbox label"
        },
        "labelPosition": {
            "values": "",
			"dataType": "string",
			"defaultValue": "",
			"description": "Whether the label should appear after or before the checkbox. Defaults to 'after' "
        },
        "checked": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "",
			"description": "Whether the checkbox is checked."
        },
        "indeterminate": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "false",
			"description": "Whether the checkbox is indeterminate. This is also known as 'mixed' mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately set to false."
        },
        "disabled": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "false",
			"description": "Whether the checkbox is disabled."
        }
	},
	"code": "function CheckBoxExample(props) {\n\tconst label = <div>Partial Selection</div>;\n\tconst inputRef = React.useRef(null);\n\tconst [isPartialSelection, togglePartialSelection] = React.useState(true);\n\tconst [isSelected, toggleSelected] = React.useState(false);\n\tconst handleChange = (e) => {\n\t\t          e.target.indeterminate = !e.target.checked;\n\t\ttogglePartialSelection(!e.target.checked);\n\t\ttoggleSelected(e.target.checked)\n\t}\n\t return (\n\t\t<>\n\t\t\t<div className='example-holder'>\n\t\t\t<Form.Check rippleColor='rgba(33, 37, 41, .1)' ref={inputRef}\n\t\t\t\t onChange={handleChange} \n\t\t\t\t indeterminate={isPartialSelection} \n\t\t\t\t className='input-row' \n\t\t\t\t labelClass='label-row' \n\t\t\t\t label={label} \n\t\t\t\t checked={isSelected} \n\t\t\t\t />\n\t\t\t\t <Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' labelClass='label-row' label='Selected' defaultChecked/>\n\t\t\t<Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' labelClass='label-row' label='Unselected'/>\n\t\t\t<Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' labelClass='label-row' label='Disabled' disabled/>\n\t\t</div>\n\t\t <div className='example-holder'>\n\t\t\t<Form.Check rippleColor='rgba(33, 37, 41, .1)' \n\t\t\t onChange={handleChange} \n\t\t\t indeterminate={isPartialSelection} \n\t\t\t className='input-row' \n\t\t\t labelClass='label-row' \n\t\t\t label={label} \n\t\t\t checked={isSelected} \n\t\t\t type='circle' \n\t\t\t />\n\t\t <Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' label='Selected' labelClass='label-row' type='circle' defaultChecked/>\n\t\t <Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' label='Unselected' labelClass='label-row' type='circle'/>\n\t\t <Form.Check className='input-row' rippleColor='rgba(33, 37, 41, .1)' label='Disabled' labelClass='label-row' type='circle' disabled/>\n\t\t</div>\n\t</>\n\t)}"
}@@@*/