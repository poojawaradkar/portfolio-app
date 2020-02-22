import PropTypes from 'prop-types';
import React from 'react';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FeedBack from './FormFeedBack';
import FormCheck from './FormCheck';
import FormRadio from './FormRadio';
import FormSwitch from './FormSwitch';
import FormTextArea from './FormTextArea';
import FormDate from './FormDate';

const propTypes = {
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  // validated: PropTypes.bool,
  as: PropTypes.elementType,
};

const Form = React.forwardRef(
  (
    {
      className,
      as: Component = 'form',
      ...props
    },
    ref
  ) => {
    
    return (
      <Component
        {...props}
        ref={ref}
        className={className}
      />
    );
  },
);

Form.displayName = 'Form';
Form.propTypes = propTypes;

Form.Group = FormGroup;
Form.Control = FormControl;
Form.Label = FormLabel;
Form.FeedBack = FeedBack;
Form.Check = FormCheck;
Form.Radio = FormRadio;
Form.Switch = FormSwitch;
Form.TextArea = FormTextArea;
Form.Date = FormDate;

export default Form;





/*
@@@Form{
	"author": "Srikanth",
	"componentName": "Form",
	"version": "",
	"description": "Container for grouping of labels, controls, optional help text, and form validation messaging.",
  "componentList": [
    {
      "title": "Form",
      "props": {
        "className": {
          "default": "",
          "dataType": "String",
          "description": "Class to apply on the form element"
        },
        "as": {
          "dataType": "String",
          "defaultValue": "default",
          "description": "Used to specify the element to be used to render(div, span, etc.)"
        }
      }
    },
    {
      "title": "Form.Group",
      "props": {
        "as": {
          "dataType": "String",
          "defaultValue": "default",
          "description": "Used to specify the element to be used to render(div, span, etc.)"
        }
      }
    },
    {
      "title": "Form.FeedBack",
      "props": {
        "type": {
          "values": ["valid","invalid"],
          "dataType": "String",
          "defaultValue": "valid",
          "description": "Specifies if the feedback is valid or error"
        },
        "as": {
          "dataType": "String",
          "defaultValue": "default",
          "description": "Used to specify the element to be used to render(div, span, etc.)"
        },
        "className": {
          "dataType": "String",
          "description": "Class to apply on the form element"
        }
      }
    },
    {
      "title": "Form.Label",
      "props": {
        "className": {
          "dataType": "String",
          "description": "Class to apply on the form element"
        },
        "htmlFor": {
          "description": "Specifies the for property of label"
        },
        "type": {
          "values": ["valid","invalid"],
          "dataType": "String",
          "defaultValue": "valid",
          "description": "Gives success or error color to the label"
        }
      }
    },
    {
      "title": "Form.Control",
      "props": {
        "size": {
          "values": ["sm", "md", "lg"],
          "dataType": "String",
          "defaultValue": "md",
          "description": "Size of the input"
        },
        "readOnly": {
          "values": ["true", "false"],
          "dataType": "Boolean",
          "defaultValue": "false",
          "description": "Make the control readonly"
        },
        "disabled": {
          "values": ["true", "false"],
          "dataType": "Boolean",
          "defaultValue": "false",
          "description": "Make the control disabled"
        },
        "onChange": {
          "dataType": "function",
          "description": "Used to specify Button type from primary, default, success"
        },
        "type": {
          "values": ["number", "text"],
          "dataType": "String",
          "defaultValue": "text",
          "description": "Type of input (Only valid if as is input)"
        },
        "isValid": {
          "values": ["true", "false"],
          "dataType": "Boolean",
          "defaultValue": "false",
          "description": "Add valid validation styles to the control"
        },
        "isInvalid": {
          "values": ["true", "false"],
          "dataType": "Boolean",
          "defaultValue": "false",
          "description": "Add invalid validation styles to the control"
        }
      }
    }
  ],
	"code": "function A() {\n  const [val, setVal] = useState('');\n  return (\n    <Form>\n      <Form.Group>\n        <Form.Label>LABEL</Form.Label>\n        <Form.Control type=\"email\" placeholder=\"Enter email\" />\n      </Form.Group>\n      <Form.Group>\n        <Form.Label variant='invalid'>LABEL</Form.Label>\n        <Form.Control variant='invalid' type=\"text\" placeholder=\"Placeholder\" />\n        <Form.FeedBack variant=\"invalid\">Error Message</Form.FeedBack>\n      </Form.Group>\n      <Form.Group>\n        <Form.Label variant='alert'>LABEL</Form.Label>\n        <Form.Control variant='alert' type=\"text\" placeholder=\"Placeholder\" />\n        <Form.FeedBack variant=\"alert\">Error Message</Form.FeedBack>\n      </Form.Group>\n      <Form.Group>\n        <Form.Label>LABEL</Form.Label>\n        <Form.TextArea value={val} onChange={e => setVal(e.target.value)} placeholder=\"Placeholder\" />\n        <Form.FeedBack variant='helper'>Error Message</Form.FeedBack>\n      </Form.Group>\n    </Form>\n  );\n}"
}@@@*/