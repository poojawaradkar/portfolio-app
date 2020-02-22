import React, { useImperativeHandle } from "react";
import useForm from "./useForm";
import Input from "./Input";
import Currency from "./Currency";
import MobileNo from "./MobileNo";
import DropDown from "./DropDown";
import Date from "./Date";
import TextArea from "./TextArea";
import SwitchButton from "./SwitchButton";
import InputWithSection from "./InputWithSection";
import styles from './form.scss';
import LabelWithTooltip from './LabelWithTooltip';

const Wrapper = (props) => {
	return (
		<div 
			className={styles['omni-form'] + (props.noPadding ? ' ' + styles['no-padding']: '') + (props.noMargin ? ' ' + styles['no-margin']: '')}
		>
			{props.children}
		</div>
	)
}


const OmniForm = React.forwardRef((props,ref) => {
	const useFormData = useForm({
		initialValues : props.initialValues,
		validateOnBlur : props.validateOnBlur,
		submitUrl : props.submitUrl,
		formatPresubmit : props.formatPresubmit,
		handleSubmit : props.handleSubmit
	});
	const {
		values,
		errors,
		handleFocus,
		handleBlur,
		handleChange,
		registerField,
		unregisterField,
		handleSubmit,
		setFieldValue,
		setFieldError
	} = useFormData;
	useImperativeHandle(ref, () => ({
    	handleSubmit,
		setFieldValue,
		setFieldError,
		values
  	}),[handleSubmit,setFieldValue]);
	const elements = props.formElements.map((cur,index) => {
		if(cur.hide){
			unregisterField(cur.name);
			return null;
		}
		const handleChangeBind = (e)=>{
			handleChange(e,cur.name);
		}
		const value = values[cur.name];
		const register = (ref) => {
			let validationType = '';
			switch(cur.type){
				case 'mobileNo' :
					validationType = 'MOBILE_NO';
				break;
				case 'email' :
					validationType = 'EMAIL';
				break;
			}

			registerField(cur.name,{
				validate : cur.validate,
				validationType,
				errorMsgObj : cur.errorMsgObj,
				onChange : cur.onChange,
				minLength : cur.minLength,
				required : cur.required
			})
		}
		const onBlur = (e) => {
			handleBlur(e,cur.name);
			cur.onBlur && cur.onBlur();
		};
		const onFocus = (e) => {
			handleFocus(e,cur.name);
			cur.onFocus && cur.onFocus();
		};
		const typeToMatch = cur.type;
		switch(typeToMatch){
			case 'switchButton':
				return (
					<SwitchButton
						label={cur.label}
						onChange={handleChangeBind}
						name={cur.name}
						labelPosition = {cur.labelPosition}
						value={cur.value}
						ref={register}
					/>
				)
			case 'customComponent' :
				return cur.customComponent({
					values,
					errors,
					handleFocus:onFocus,
					handleBlur:onBlur,
					handleChange:handleChangeBind,
					registerField,
					handleSubmit,
					setFieldValue,
					setFieldError
				});
			case 'dropdown' :
				return (
					<DropDown
						label={cur.label}
						optionList={cur.optionList}
						onChange={handleChangeBind}
						isMobile={props.isMobile}
						value ={value}
						name={cur.name}
						ref={register}
						placeholder={cur.placeholder}
						renderSelected={cur.renderSelected}
						renderItem={cur.renderItem}
					/>
				)
			case 'date' : 
				return (
					<Date
						label={cur.label}
						onChange={handleChangeBind}
						onBlur={onBlur}
						isMobile={props.isMobile}
						value ={value}
						name={cur.name}
						ref={register}
						iconClass={cur.iconClass}
					/>
				)
			case 'inputWithSection' : 
				return (
					<InputWithSection
						label={cur.label}
						width={cur.width} 
						dropdown={cur.dropdown}
						text={cur.text}
						name={cur.name}
						textOnRight={cur.textOnRight}
						input = {{
							value : value,
							onChange : handleChangeBind,
							onFocus,
							onBlur,
							type : cur.type,
							as : cur.as,
							minLength : cur.minLength,
							maxLength : cur.maxLength,
							placeholder : cur.placeholder
						}}
						errorMessage={errors[cur.name]}
						ref={register}
					/>
				)
			case 'textArea' :
				return (
					<TextArea
						label={cur.label}
						infoText={cur.infoText}
						name={cur.name}
						input = {{
							value : value,
							onChange : handleChangeBind,
							onFocus,
							onBlur,
							type : cur.type,
							minLength : cur.minLength,
							maxLength : cur.maxLength,
							placeholder : cur.placeholder
						}}
						errorMessage={errors[cur.name]}
						ref={register}
					/>
				)
		}
		let Comp = Input;
		if(typeToMatch == 'currency'){
			Comp = Currency;
		}else if(typeToMatch == 'mobileNo'){
			Comp = MobileNo
		}
		return (
			<Comp
				label={cur.label}
				prepend={cur.prepend} 
				append={cur.append} 
				infoText={cur.infoText}
				rightSection={cur.rightSection}
				name={cur.name}
				rightIconClass={cur.rightIconClass}
				onRightIconClick={cur.onRightIconClick}
				input = {{
					value : value,
					onChange : handleChangeBind,
					onFocus,
					onBlur,
					autoFocus:cur.autoFocus,
					type : cur.type,
					as : cur.as,
					minLength : cur.minLength,
					maxLength : cur.maxLength,
					placeholder : cur.placeholder,
					pattern : cur.pattern
				}}
				errorMessage={errors[cur.name]}
				ref={register}
			/>
		)
	});
	return (
		<Wrapper noPadding={props.noPadding} noMargin={props.noMargin}>
			{elements}
		</Wrapper>
	)
});
OmniForm.Input = Input;
OmniForm.useForm = useForm;
OmniForm.DropDown = DropDown;
OmniForm.LabelWithTooltip = LabelWithTooltip;
OmniForm.Date = Date;
OmniForm.SwitchButton = SwitchButton;
OmniForm.InputWithSection = InputWithSection;
OmniForm.Wrapper = Wrapper;
export default OmniForm;


/*
@@@OmniForm{
	"author": "Himanshu Khantwal",
	"componentName": "OmniForm",
	"version": "",
	"description": "Container for grouping of labels, controls, optional help text, and form validation messaging.",
  	"componentList": [{
		"title": "OmniForm",
		"props": {
			"initialValues": {
				"required": "true",
				"dataType": "Object",
				"description": "An object to specify initial value of form\nkey will be formElement name and value will be the initial value of individual element"
			}, 
			"validateOnBlur": {
				"dataType": "boolean",
				"defaultValue":"false",
				"description": "if true, field will be validated on Blur"
			},
			"submitUrl": {
				"dataType" : "string",
				"description": "Url To Which Form data will be submitted"
			},
			"formatPresubmit": {
				"dataType": "function",
				"description": "A function to call before api call is made to format data to be send(if submitUrl is provided)"
			}, 
			"handleSubmit": {
				"dataType": "function",
				"description": "a function that will be triggered on submit call of form(Note:will ignore submitUrl and formatPresubmit, ajax call will be handled by user)"
			},
			"formElements": {
				"required": "true",
				"dataType": "Array",
				"description": "Array of form elements to render refer below for list of accepted elements"
			}
		}
	},{
		"title": "Switch Button",
		"props" : {

		}
	},{
		"title": "Custom Component",
		"props" : {
			
		}
	},{
		"title": "DropDown",
		"props" : {
			
		}
	},{
		"title": "Date",
		"props" : {
			
		}
	},{
		"title": "Input With Section",
		"props" : {
			
		}
	},{
		"title": "Resizable Textarea",
		"props" : {
			
		}
	},{
		"title": "Currency",
		"props" : {
			
		}
	},{
		"title": "Mobile No",
		"props" : {
			
		}
	},{
		"title": "Simple Input Field",
		"props" : {
			
		}
	}],
	"code": "function FormExample(){\n\tconst formRef = React.useRef(null);\n\tconst initialValues = {\n\t\t'field1' : '',\n\t\t'field2' : '',\n\t\t'field3' : '',\n\t\t'field4' : '',\n\t\t'field5' : '',\n\t\t'field6' : '',\n\t\t'field7' : '',\n\t\t'field8' : '',\n\t\t'field9' : '',\n\t\t'field10' : '',\n\t\t'field11' : '',\n\t}\n\tconst basicFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Form Basic</div>}\n\t},{\n\t\tname : 'field1',\n\t\tplaceholder:\"Placeholder\",\n\t  \tlabel : <OmniForm.LabelWithTooltip label=\"Label\" popoverContent=\"Heart attacks are more likely to happen on a Monday.\"/>,\n\t  \tvalidate:(value) => {\n\t  \t\tif(value.length < 3){\n\t  \t\t\treturn \"Error Message\";\n\t  \t\t}\n\t  \t}\n\t},{\n\t\tname : 'field2',\n\t\tplaceholder:\"Placeholder\",\n\t\ttype : 'currency',\n\t\tlabel : 'AMOUNT',\n\t\tprepend : () => (<i className=\"icon-c-inrR\" />)\n\t}]\n\tconst dropDownFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Dropdown</div>}\n\t},{\n\t  \tname : 'field3',\n\t\tlabel : 'LABEL',\n\t\tplaceholder:\"Placeholder\",\n\t\toptionList : [{\n\t\t\tlabel : \"Value 1\",\n\t\t\tkey : \"val1\",\n\t\t},{\n\t\t\tlabel : \"Value 2\",\n\t\t\tkey : \"val2\"\n\t\t}],\n\t\ttype : 'dropdown'\n\t},{\n\t\tname : 'field4',\n\t\tlabel : 'LABEL',\n\t\twidth:'1-2',\n\t\tdropdown : {\n\t\t\toptionList : [{\n\t\t\t\tlabel : \"Value 1\",\n\t\t\t\tkey : \"val1\",\n\t\t\t},{\n\t\t\t\tlabel : \"Value 2\",\n\t\t\t\tkey : \"val2\"\n\t\t\t}]\n\t\t},\n\t\ttextOnRight : true,\n\t  \ttype:'inputWithSection',\n\t},{\n\t\tname : 'field5',\n\t\tlabel : 'LABEL',\n\t\tdropdown : {\n\t\t\toptionList : [{\n\t\t\t\tlabel : \"Value 1\",\n\t\t\t\tkey : \"val1\",\n\t\t\t},{\n\t\t\t\tlabel : \"Value 2\",\n\t\t\t\tkey : \"val2\"\n\t\t\t}],\n\t\t},\n\t\ttype:'inputWithSection',\n\t\tonChange:(event,value) => {\n\t\t\tconsole.log(event);\n\t\t\tconsole.log(value);\n\t\t}\n\t}];\n\tconst searchDropDownFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Search With Dropdown</div>}\n\t},{\n\t\tname : 'field6',\n\t\tlabel : 'LABEL',\n\t\tprepend : () => (<i className=\"icon-HDRsearch\" />)\n\t}]\n\t\n\tconst dateFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Date & Time</div>}\n\t},{\n        name : 'field7',\n        label : 'LABEL',\n        type:'date',\n        iconClass:'icon-calenderForm',\n        onChange:(event,value) => {\n            console.log(event);\n            console.log(value);\n        }\n    }];\n\tconst nonEditableInpFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Input With Non Editable</div>}\n\t},{\n\t\tname : 'field8',\n\t\tlabel : 'LABEL',\n\t\ttext:'Non Editable text',\n\t\twidth:'1-2',\n\t\ttype:'inputWithSection',\n\t\tonChange:(event,value) => {\n\t\t\tconsole.log(event);\n\t\t\tconsole.log(value);\n\t\t}\n\t},{\n\t\tname : 'field9',\n\t\tlabel : 'LABEL',\n\t\ttext:'Non Editable text',\n\t\ttype:'inputWithSection',\n\t\tonChange:(event,value) => {\n\t\t\tconsole.log(event);\n\t\t\tconsole.log(value);\n\t\t}\n\t}];\n\tconst mobEmailFormEle = [{\n\t  type : 'customComponent',\n\t  customComponent : () => {return <div className=\"form-title\">Multy Mobile / Email</div>}\n\t},{\n        name : 'field10',\n        label : 'MOBILE',\n        type : 'mobileNo',\n        prepend : () => '+91'\n    },{\n    name : 'field11',\n        label : 'EMAIL',\n        inputType : 'email'\n    }];\n\treturn (\n\t\t<div className=\"form-ex-wrapper\">\n\t\t    <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={basicFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n            <div style={{borderBottom:'1px solid #EDEDED'}}/>\n            <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={dropDownFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n            <div style={{borderBottom:'1px solid #EDEDED'}}/>\n            <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={searchDropDownFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n            <div style={{borderBottom:'1px solid #EDEDED'}}/>\n            <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={dateFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n            <div style={{borderBottom:'1px solid #EDEDED'}}/>\n            <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={nonEditableInpFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n            <div style={{borderBottom:'1px solid #EDEDED'}}/>\n            <div className=\"omni-form-grp\">\n                <OmniForm \n                    formElements={mobEmailFormEle} \n                    initialValues={initialValues} \n                    validateOnBlur\n                    ref={formRef}\n                    submitUrl =\"/abc\"\n                />\n            </div>\n\t    </div>\n\t)\n}"
}@@@*/
