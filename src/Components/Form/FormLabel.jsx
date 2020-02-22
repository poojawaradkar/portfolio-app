import React from 'react';
import styles from './formLabel.scss';

const FormLabel = React.forwardRef(
    ({ className='', htmlFor, variant, ...props }, ref) => {
  
      className += ' ' + styles['form-label'];

      if(variant) {
        className += ' ' + styles[variant];
      }
  
      return (
        <label ref={ref} className={className} htmlFor={htmlFor} {...props} />
      );
    },
);



export default FormLabel;

/*@@@FormLabel{
"author": "Srikanth",
	"componentName": "Form Label",
	"version": "",
  "description": "This Component can be used to render Button of different types. Such as Primary, Ghost, Primary Raised, etc",
  "props": {

  },
	"code": "<Form.Group controlId=\"formBasicEmail\"><Form.Label>Email address</Form.Label><Form.Control type=\"email\" placeholder=\"Enter email\" /></Form.Group>"
}@@@*/