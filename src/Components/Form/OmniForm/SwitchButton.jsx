

import React from 'react';
import Form from '../Form';
import styles from "./form.scss";

const Input = React.forwardRef((props,ref) => {
	const onChange = (event) => {//to use later
		const fakeEvent = {
			target : {
				name : props.name,
				value : value == 'on' ? true : false
			}
		}
		props.onChange(fakeEvent);
	}
	return (
    	<Form.Group className={styles['omni-form-grp']}>
      		<Form.Switch
				label={props.label}
				labelPosition={props.labelPosition || "before"}
				onChange = {props.onChange}
				name = {props.name}
				value={props.value}
				ref={ref}
			/>
    	</Form.Group>
  	);
});
export default Input;