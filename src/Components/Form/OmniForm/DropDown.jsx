import React from "react";
import Form from "../Form";
import Dropdown from '../../Dropdown/Dropdown';
import styles from "./form.scss";

const DropDown = React.forwardRef((props,ref) => {
	const onChange = (value) => {
		const fakeEvent = {
			target : {
				name : props.name,
				value : value.key
			}
		}
		props.onChange(fakeEvent);
	}
	return (
    	<Form.Group className={styles['omni-form-grp']}>
	        <Form.Label className={styles['omni-form-label']}>{props.label}</Form.Label>
			<Dropdown 
				placeholder={props.placeholder}
				optionList={props.optionList}
				renderSelected={props.renderSelected}
				renderItem={props.renderItem}
				onChange={onChange} 
				isMobile={props.isMobile}
				value={props.value}
				ref={ref}
			/>	        
	    </Form.Group>
  	);
});

export default DropDown;