import React, {useRef} from 'react';
import DatePicker from '../DatePicker/DatePicker';
import FormControl from '../Form/FormControl';
import styles from  './formDate.scss';
import {format} from 'date-fns';

FormDate.defaultProps = {
    placeHolder: 'DD/MM/YYYY',
    dateFormat: 'dd/MM/yyyy'
}

export default function FormDate(props){
    const inputEl = useRef(null);
    
    const setValueOfMask = (value) => {
        const placeholder = (props.dateFormat).toUpperCase();
        return value + placeholder.substr(value.length);
    }
    const handleCurrentValue = (value) => { 
        // value - 22/12/YYYY
        var maskedNumber = 'MDY',
            placeholder = (props.dateFormat).toUpperCase(),
            l = placeholder.length, newValue = '',
            i, j, isInt, strippedValue, matchesNumber;
        // strip special characters
        strippedValue = value.replace(/\D/g, ""); // strippedValue = 2212
    
        for (i = 0, j = 0; i < l; i++) {
            isInt = !isNaN(parseInt(strippedValue[j]));
            matchesNumber = (maskedNumber.indexOf(placeholder[i]) >= 0);
            if (matchesNumber && isInt) {
                //return date[j] "2212"[index]
                newValue += strippedValue[j++];
            } else if (!isInt && matchesNumber) {
                // non digit values
                return newValue;
            } else {
                //return masked value 'DD/MM/YYYY'[index]
                newValue += placeholder[i];
            }
            // break if no characters left and the pattern is non-special character
            if (strippedValue[j] == undefined) {
                break;
            }
        }
        return newValue;
    }
    const handleChange = (value) => {
        value = handleCurrentValue(value);
        let inputValue = setValueOfMask(value);
        if(inputValue == (props.dateFormat).toUpperCase()){
            inputValue = "";
        }
        inputEl.current.value = inputValue;
        inputEl.current.setSelectionRange(value.length, value.length);
    }
	const CustomInput = (args) => {
		return <>
            <FormControl
                {...args}
                {...props}
                type="text" 
                ref={inputEl}
                placeholder= 'DD/MM/YYYY'
                onChange={args.onChange}
                className={styles["date-input"]}
            />
			<i className={`${styles["calendar-icon-style"]} ${props.iconClass}`}></i>
		</>
    };
    return (
        <DatePicker 
            customInput={<CustomInput />}
            customInputRef={inputEl}
            onChangeRaw={event => handleChange(event.target.value)}
            onSelect={(changedDate) => changedDate && handleChange(format(changedDate, props.dateFormat))}
            {...props}
        >
        </DatePicker>
    )
}

/*
@@@FormDate{
	"author": "Pooja Waradkar",
	"componentName": "FormDate",
	"version": "",
	"description": "Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.",
	"props": {
        "noGutters": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "true",
			"description": "Removes the gutter spacing between Cols as well as any added negative margins."
		}
	},
	"code": "function CheckBoxExample(props) {\n\t const startDate = new Date(); \n\t return(<div className='date-picker-holder'><Form.Date startDate={startDate} iconClass='icon-calenderForm'/></div>)}"
}@@@*/