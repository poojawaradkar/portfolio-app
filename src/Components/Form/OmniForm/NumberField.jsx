import React from 'react';
import Input from './Input';
const defaultRegex = /^\d{0,}(\.\d{0,})?$/
import {connect} from 'react-redux';

const NumberField = React.forwardRef((props,ref) => {
	const regexToMatch = props.regex || defaultRegex;
	const handleChange = (e) => {
		const value = e.currentTarget.value;
		if(value && !regexToMatch.test(value)){
			return;
		}
		props.input.onChange && props.input.onChange(e);
	}
	const handleKeyDown = (e) => {
		if(!props.deviceData.isIphone){
			return;
		}
		const keycode = e.key;
		if(keycode == "Backspace"){
			return;
		}
		if(!keycode.match(/\d|\./g) || !((props.input.value || "")+(keycode||'')).match(regexToMatch)){
			e.preventDefault();
		}
		props.input.handleKeyDown && props.input.handleKeyDown(e);
	}
	const newProps = {
		...props
	}
	newProps.input = {
		...newProps.input,
		type : props.deviceData.isIphone ? 'number' : 'tel',
		onChange : handleChange,
		onKeyDown:handleKeyDown,
	}
	return (
		<Input
			{...newProps}
			ref={ref}
		/>
  	);
});

const mapStateToProps = (state,props) => {
	return {
		...props,
		deviceData : state.library.deviceData
	}
}

export default connect(mapStateToProps,null,null,{forwardRef:true})(NumberField);