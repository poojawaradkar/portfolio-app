import React from 'react';
import Form from '../Form';
import InputWithSection from "../../InputWithSection/InputWithSection";
import styles from "./form.scss";

const Input = React.forwardRef((props,ref) => {
	const isError = !!props.errorMessage;
	const feedBackShown = isError || props.infoText;;
	const variantProps = isError ? { variant: "invalid" } : {};
	return (
    	<Form.Group className={styles['omni-form-grp'] + (feedBackShown ? " " + styles['margin-b0'] : '')}>
      		<Form.Label {...variantProps} className={styles['omni-form-label']}>{props.label}</Form.Label>
      		<InputWithSection
        		text={props.text}
				input={{ 
					placeholder: "Placeholder",
					...props.input,
					...variantProps
				}}
				width={props.width}
				dropdown={props.dropdown}
				ref={ref}
				textOnRight={props.textOnRight}
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