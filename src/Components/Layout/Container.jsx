import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/container.module.scss';

const propTypes = {
    fluid : PropTypes.bool.isRequired
}

Container.defaultProps = {
    fluid: true
}

export default function Container(props){
    const {
        clickHandler = () => {},
		className = '',
		fluid,
		style={}
    } = props;
    return (
        <div 
			onClick={clickHandler}
			style={style}
			className = {`${className} ${fluid? `${styles['container-fluid']}` : `${styles['container']}` }`}
		>
			{props.children ? props.children : null}
		</div>
    )
}

Container.propTypes = propTypes;
/*
@@@Container{
	"author": "Pooja Waradkar",
	"componentName": "Container",
	"version": "",
	"description": "Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive.",
	"props": {
        "fluid": {
            "values": "true | false",
			"dataType": "boolean",
			"defaultValue": "true",
			"description": "Allow the Container to fill all of its available horizontal space."
		}
	},
	"code": "<Container>\n\t<Row>\n\t\t<Col xs={12} md={8}><div className=\"dummystyle\">xs=12 md=8</div></Col>\n\t\t<Col xs={6} md={4}><div className=\"dummystyle\">xs=6 md=4</div></Col>\n\t</Row>\n\t<Row>\n\t\t<Col xs={6} md={4}><div className=\"dummystyle\">xs=6 md=4</div></Col>\n\t\t<Col xs={6} md={4}><div className=\"dummystyle\">xs=6 md=4</div></Col>\n\t\t<Col xs={6} md={4}><div className=\"dummystyle\">xs=6 md=4</div></Col>\n\t</Row>\n\t<Row>\n\t\t<Col xs={6}><div className=\"dummystyle\">xs=6</div></Col>\n\t\t<Col xs={6}><div className=\"dummystyle\">xs=6</div></Col>\n\t</Row>\n</Container>"
}@@@*/