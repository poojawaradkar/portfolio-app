import {useRef,useReducer,useCallback,useEffect} from 'react';
import { setIn,getIn } from "./util";
import axios from 'axios';
import {MOBILE_REGEX,EMAIL_REGEX} from '../../regex/regex';

const defaultErrorMessage = {
	MOBILE_NO : {
		EMPTY : 'MOBILE NO. IS MANDATORY',
		MIN_LENGTH : '',
		INVALID : 'INVALID MOBILE NO.'
	},
	EMAIL : {
		EMPTY : 'EMAIL IS MANDATORY',
		INVALID : 'INVALID EMAIL'
	}
}

const validationFns = {
	MOBILE_NO : (value) => {
		return MOBILE_REGEX.test(value);
	},
	EMAIL : (value) => {
		return EMAIL_REGEX.test(value);
	}
}

const changeValidateFn = {
	MOBILE_NO : (value) => {
		if(!value || /^(9|8|7|6)[0-9]{0,9}$/.test(value)){
			return true;
		}
		return false;
	}
}

function formReducer(state, msg) {
    switch (msg.type) {
    	case "SET_FIELD_VALUE":
			return {
				...state,
				values: setIn(state.values, msg.payload.field, msg.payload.value)
			};
		case "UPDATE_MULTIPLE_FIELD_VALUES" :
			let newValues = state.values;
			for(let key in msg.payload){
				newValues = setIn(newValues, key,msg.payload[key]);
			}
			return {
				...state,
				values : newValues
			}
      	case "SET_FIELD_ERROR":
			return {
          		...state,
				errors: setIn(state.errors, msg.payload.field, msg.payload.value)
			};
		case "UPDATE_MULTIPLE_FIELD_ERRORS" :
			let newErrors = state.errors;
			for(let key in msg.payload){
				newErrors = setIn(newErrors, key, msg.payload[key]);
			}
			return {
				...state,
				errors : newErrors
			}
      	default:
        	return state;
    }
}

export default function useForm(props={}) {
    const isMounted = useRef(false);
    const fieldRegistry = useRef({});

	useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);
	
	const [state, dispatch] = useReducer(formReducer, {
        values: props.initialValues || {},
        errors: props.initialErrors || {},
        isSubmitting: false,
        isValidating: false
	});
	
	const registerField = useCallback((name, { validate,validationType,errorMsgObj,onChange,minLength,required }) => {
		if(!name){
			return;
		}
		fieldRegistry.current[name] = {
			validate,
			validationType,
			errorMsgObj,
			onChange,
			minLength,
			required
        };
    }, []);
	
	const unregisterField = useCallback((name) => {
        delete fieldRegistry.current[name];
    }, []);
	
	const setError = useCallback((fieldName,errorMessage) => {
		dispatch({
        	type: 'SET_FIELD_ERROR',
          	payload: {
            	field: fieldName,
            	value: errorMessage,
          	},
        });
	},[]);

	const handleFocus = useCallback((event,name) => {
		const fieldName = name || event.target.name;
		setError(fieldName,false);
	});

	const handleBlur = useCallback((event,name) => {
		if(!props.validateOnBlur){
			return;
		}
		const fieldName = name || event.target.name;
		const fieldValue = event.target.value;
		
		const errorMessage = checkErrorInField({
			fieldName,
			fieldValue
		})
		errorMessage && setError(fieldName, errorMessage);
	})

	const checkErrorInField = ({
		fieldName,
		fieldValue
	}) => {
		const field = fieldRegistry.current[fieldName];
		const validationType = field.validationType;
		const errorMsgObj = field.errorMsgObj || {};
		const defaultErrorObj = defaultErrorMessage[validationType] || {};
		if(field.validate){
			return field.validate(fieldValue);
		}else if(validationType && validationFns[validationType]){
			let errorMessage = "";
			let flag = validationFns[validationType](fieldValue);
			if(flag !== true){
				if(!fieldValue){
					errorMessage = errorMsgObj.EMPTY || defaultErrorObj.EMPTY;
				}else if(minLength && fieldValue.length < minLength){//change to dynamic value
					errorMessage = errorMsgObj.MIN_LENGTH || defaultErrorObj.MIN_LENGTH;
				}
				if(!errorMessage){
					errorMessage = errorMsgObj.INVALID || defaultErrorObj.INVALID || "INVALID INPUT"
				}
			}
			return errorMessage;
		}else{
			let errorMessage = "";
			const minLength = field.minLength || (field.required ? 1 : 0);
			if(minLength){
				if(!fieldValue){
					errorMessage = errorMsgObj.EMPTY || defaultErrorObj.EMPTY;
				}else if(minLength && fieldValue.length < minLength){//change to dynamic value
					errorMessage = errorMsgObj.MIN_LENGTH || defaultErrorObj.MIN_LENGTH;
				}
			}
			return errorMessage;
		}
	}

	const handleChange = useCallback((event,name) => {
		//validate
		const fieldName = name || event.target.name;
		const fieldValue = event.target.value;
		const validationType = fieldRegistry.current[fieldName].validationType;
		if(validationType && changeValidateFn[validationType]){
			let flag = changeValidateFn[validationType](fieldValue);
			if(!flag){
				return;
			}
		}
		if(fieldRegistry.current[fieldName].onChange){
			let flag = fieldRegistry.current[fieldName].onChange(event,fieldValue);
			if(flag === false){
				return;
			}
		}
		dispatch({
            type: 'SET_FIELD_VALUE',
            payload: {
                field : fieldName,
                value : fieldValue,
            },
        });
	}, []);

	const setFieldValue = (obj) => {
		dispatch({
            type: 'UPDATE_MULTIPLE_FIELD_VALUES',
            payload: obj
        });
	}

	const setFieldError = (obj) => {
		dispatch({
            type: 'UPDATE_MULTIPLE_FIELD_ERRORS',
            payload: obj
        });
	}

	const handleSubmit = useCallback(() => {
		let isError = false;
		for(var fieldName in fieldRegistry.current){
			const fieldValue = getIn(state.values,fieldName);
			const errorMessage = checkErrorInField({
				fieldName,
				fieldValue
			})
			if(errorMessage){
				isError = true;
				setError(fieldName,errorMessage);
			}

		}
		if(isError){
			return Promise.reject("Error In Fields");
		}
		if(props.handleSubmit){
			return props.handleSubmit({
				values : state.values
			});
		}
		if(props.submitUrl){
			let data = state.values;
			if(props.formatPresubmit){
				data = props.formatPresubmit(data);
			}
			return axios.post(props.submitUrl,data);
		}
	})
	
	for(let key in props.initialValues){
		fieldRegistry.current[key] = {};
	}

	return { 
		...state,
		registerField,
		unregisterField,
		handleFocus,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
		setFieldError
	};
}