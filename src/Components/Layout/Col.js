import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/col.module.scss';

const colWidths = ["xs", "sm", "md", "lg", "xl"];
const stringOrNumber = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
]);

const columnProps = PropTypes.oneOfType([
	PropTypes.bool, //can be a boolean
	PropTypes.number, //can be a number
	PropTypes.string, //can be a string,
	PropTypes.shape({
		size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]), // An object that could be one of many types
		order: stringOrNumber,
		offset: stringOrNumber
	})
]);

const propTypes = {
	xs : columnProps,
	sm : columnProps,
	md : columnProps,
	lg : columnProps,
	xl : columnProps,
	className : PropTypes.string,
	cssModule : PropTypes.object,
	widths : PropTypes.array
}
Col.defaultProps = {
	widths: colWidths
}
function mapToCssModules(className = '', cssModule = styles) {
	if (!cssModule) return className;
	return className
	  .split(' ')
	  .map(c => cssModule[c] || c)
	  .join(' ');
  }
 

export default function Col(props) {
	const {
		clickHandler = () => {},
		cssModule,
		className,
		widths,
		...attributes
	} = props;
	
	let sizeClass = [],
		classes = [];
	widths.forEach(colWidth => {
		let size, offset, order,
			columnProp = props[colWidth];
		
			delete attributes[colWidth];
		if(columnProp != null && typeof columnProp === 'object') {
			({size = true, offset, order} = columnProp);
		} else {
			size = columnProp;
		}
		let infix = colWidth !== 'xs' ? `-${colWidth}`: '';

		if(size != null) {
			sizeClass.push(
				(size === true) ? `${'col'}` : `col${infix}-${size}`
			)
		}

		if(order != null) {
			classes.push(`order${infix}-${order}`);
		}

		if(offset != null) {
			classes.push(`offset${infix}-${offset}`);
		}
	});

	if(!sizeClass.length){
		sizeClass.push('col');
	}
	sizeClass.push(className);
	
	const classList = mapToCssModules(sizeClass.concat(classes).join(' '));
    return (
		<div 
			onClick={clickHandler}
			className = {`${classList}`}
		>
		{props.children ? props.children : null}
		</div>
    );
}
Col.propTypes = propTypes;
/*
@@@Col{
	"author": "Pooja Waradkar",
	"componentName": "Col",
	"version": "",
	"description": "Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.",
	"props": {
        "xl": {
            "values": "true | 'auto' | number | { span: true | 'auto' | number, offset: number, order: number }",
			"dataType": "boolean | string | number",
			"defaultValue": "true",
			"description": "The number of columns to span on extra large devices (≥1200px)"
		},
        "lg": {
            "values": "true | 'auto' | number | { span: true | 'auto' | number, offset: number, order: number }",
			"dataType": "string",
			"defaultValue": "true",
			"description": "The number of columns to span on large devices (≥992px)"
        },
        "md": {
            "values": "true | 'auto' | number | { span: true | 'auto' | number, offset: number, order: number }",
			"dataType": "string",
			"defaultValue": "true",
			"description": "The number of columns to span on medium devices (≥768px)"
        },
        "sm": {
            "values": "true | 'auto' | number | { span: true | 'auto' | number, offset: number, order: number }",
			"dataType": "string",
			"defaultValue": "true",
			"description": "The number of columns to span on small devices (≥576px)"
		},
        "xs": {
            "values": "true | 'auto' | number | { span: true | 'auto' | number, offset: number, order: number }",
            "dataType": "string",
            "defaultValue": "true",
            "description": "The number of columns to span on sxtra small devices (<576px)"
        },
		"size": {
			"dataType": "string",
			"defaultValue": "",
			"values": ["xs", "sm", "lg"],
			"description": "Specifies the size of Button to rendered"
		},
		"clickHandler": {
			"dataType": "function",
			"description": "Clickhandler for the button"
		}
	},
	"code": "<Row>\n\t<Col md={6}>\n\t\t<div className=\"dummystyle\">Hello there</div>\n\t</Col>\n\t<Col md={6}>\n\t\t<div className=\"dummystyle\" >Hello there</div>\n\t</Col>\n</Row>"
}@@@*/