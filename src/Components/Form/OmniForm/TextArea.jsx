import React from 'react';
import Form from '../Form';
import FormTextArea from "../../Form/FormTextArea";
import styles from "./form.scss";

const TextArea = React.forwardRef((props,ref) => {
	const isError = !!props.errorMessage;
	const feedBackShown = isError || props.infoText;
	const variantProps = isError ? { variant: "invalid" } : {};
	return (
    	<Form.Group className={styles['omni-form-grp'] + (feedBackShown ? " " + styles['margin-b0'] : '')}>
      		<Form.Label {...variantProps} className={styles['omni-form-label']}>{props.label}</Form.Label>
      		<FormTextArea
				placeholder={"Placeholder"}
				{...props.input}
				{...variantProps}
				ref={ref}
				className={styles['form-input']}
      		/>
			{feedBackShown ? (
				<Form.FeedBack 
					{...variantProps}
					className={styles['error-msg']}
				>
					{props.errorMessage || props.infoText}
				</Form.FeedBack>
			) : null}
    	</Form.Group>
  	);
});
export default TextArea;