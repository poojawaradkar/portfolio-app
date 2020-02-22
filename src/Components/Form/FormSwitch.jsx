import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import FormInput from './FormControl';
import withRipple from '../Ripples/RipplesHOC';
import styles from './formSwitch.scss';

const propTypes = {
    /**
     * The FormSwitch `ref` will be forwarded to the underlying input element,
     * which means it will be a DOM node, when resolved.
     *
     * @type {ReactRef}
     * @alias ref
     */
    _ref: PropTypes.any,

    /** A HTML id attribute, necessary for proper form accessibility. */
    id: PropTypes.string,

    as: PropTypes.elementType,
    disabled: PropTypes.bool,
    label: PropTypes.node,
    labelClass: PropTypes.string,
    showToggleStatus: PropTypes.bool,

    /** Whether the label should appear after or before the checkbox. Defaults to 'after'  */
    labelPosition: PropTypes.string,

    /** Manually style the input as valid */
    isValid: PropTypes.bool.isRequired,

    /** Manually style the input as invalid */
    isInvalid: PropTypes.bool.isRequired,

};

const defaultProps = {
    disabled: false,
    showToggleStatus: true,
    isValid: false,
    isInvalid: false
};

const FormSwitch = React.forwardRef(
    (
        {
            id="switch"+Math.floor(new Date().getTime()*Math.random()),
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
            ...props
        },
        ref,
    ) => {
        const input = (
            <FormInput
                {...props}
                id={id}
                type='checkbox'
                ref={ref}
                className={styles["custom-switch"]}
                isValid={isValid}
                isInvalid={isInvalid}
                disabled={disabled}
            />
        );
        return (
            <label
                for={id}
                style={style}
                className={`${className} ${styles['custom-switch-input']} ${variant} ${styles['label-'+(labelPosition=='before' ? 'before' : '') ]} ${disabled ? styles['input-disabled'] : ''} ${props.rippleClass} ${label ? styles['has-label'] : ''}`}
                {...props.rippleHandler}
            >
                <>
                    {input}
                    <FormLabel 
                        className={`${styles["custom-switch-btn"]} ${labelClass} ${props.showToggleStatus ? styles["show-switch-status"] : ''}`}
                        for={id}
                    >
                        <div className={styles['switch-button']}></div>
                    </FormLabel>
                </>
                <FormLabel for={id} className={styles['switch-label']}>
                    {label}
                </FormLabel>
                {label && props.renderRipple()}
            </label>
        );
    },
);
FormSwitch.displayName = 'FormSwitch';
FormSwitch.propTypes = propTypes;
FormSwitch.defaultProps = defaultProps;

export default withRipple(FormSwitch);

/*
@@@FormSwitch{
	"author": "Pooja Waradkar",
	"componentName": "FormSwitch",
	"version": "",
	"description": "For the non-textual checkbox and radio controls, FormSwitch provides a single component for both types that adds some additional styling and improved layout.",
	"props": {
        "ref": {
            "values": "",
			"dataType": "ReactRef",
			"defaultValue": "",
			"description": "The FormSwitch ref will be forwarded to the underlying input element, which means it will be a DOM node, when resolved."
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
        "labelClass": {
            "values": "",
			"dataType": "string",
			"defaultValue": "",
			"description": "Class name for Switch label"
        },
        "labelPosition": {
            "values": "",
			"dataType": "string",
			"defaultValue": "",
			"description": "Whether the label should appear after or before the Switch. Defaults to 'after' "
        },
        "checked": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "",
			"description": "Whether the Switch is checked."
        },
        "showToggleStatus": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "true",
			"description": "Whether to show the ON / OFF text."
        },
        "disabled": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "false",
			"description": "Whether the Switch is disabled."
        }
	},
	"code": "<>\n\t<div className='example-holder'>\n\t\t<Form.Switch label='Off' className='input-row label-row'/>\n\t\t<Form.Switch label='On' className='input-row label-row' defaultChecked/>\n\t\t<Form.Switch label='Disabled' className='input-row label-row' disabled/>\n\t</div>\n\t<div className='example-holder'>\n\t\t<Form.Switch label='Off' labelPosition='before' className='input-row label-row'/>\n\t\t<Form.Switch label='On' labelPosition='before' className='input-row label-row' defaultChecked/>\n\t\t<Form.Switch label='Disabled' labelPosition='before' className='input-row label-row' disabled/>\n\t</div>\n</>"
}@@@*/