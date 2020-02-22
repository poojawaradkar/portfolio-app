import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/row.module.scss';

const propTypes = {
    noGutters : PropTypes.bool.isRequired
}

Row.defaultProps = {
    noGutters: true
}

export default function Row(props){
    const {
        clickHandler = () => {},
		className = '',
		noGutters,
    } = props;
    return (
        <div 
			onClick={clickHandler}
			className = {`${styles['row']} ${className} ${noGutters ? `${styles['no-gutters']}` : ''}`}
		>
		{props.children ? props.children : null}
		</div>
    )
}

Row.propTypes = propTypes;
/*
@@@Row{
	"author": "Pooja Waradkar",
	"componentName": "Row",
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
	"code": "<Row>\n\t<Col xs=\"auto\"><div className=\"dummystyle\">First, but unordered</div></Col>\n\t<Col xs={{size: 4, order: 2, offset: 1 }}><div className=\"dummystyle\">Second, but last</div></Col>\n\t<Col xs={{size: 3,  order: 1 }}><div className=\"dummystyle\">Third, but second</div></Col>\n</Row>"
}@@@*/