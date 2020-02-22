import React from 'react';
import Form from '../Form';
import styles from "./form.scss";

const Input = React.forwardRef((props,ref) => {
	const isError = !!props.errorMessage;
	const feedBackShown = isError || props.infoText;
	const variantProps = isError ? { variant: "invalid" } : {};
	const onChange = (event,value) => {
		const fakeEvent = {
			target : {
				name : props.name,
				value : value
			}
		}
		props.onChange(fakeEvent);
	}
	return (
    	<Form.Group className={styles['omni-form-grp'] + (feedBackShown ? " " + styles['margin-b0'] : '')}>
      		<Form.Label {...variantProps} className={styles['omni-form-label']}>{props.label}</Form.Label>
			<Form.Date 
				startDate={props.value} 
				iconClass={props.iconClass}
				onDateChange={onChange}
				onBlur={props.onBlur}
			/>
			{feedBackShown ? (
				<Form.FeedBack 
					variant='invalid'
					className={styles['error-msg']}
				>
					{props.errorMessage || props.infoText}
				</Form.FeedBack>
			) : null}
    	</Form.Group>
  	);
});
export default Input;