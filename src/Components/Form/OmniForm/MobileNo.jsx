import React from 'react';
import NumberField from './NumberField';
import {MOBILE_CHANGE_REGEX} from '../../regex/regex';
const Currency = React.forwardRef((props,ref) => {
	return (
		<NumberField
			{...props}
			regex={MOBILE_CHANGE_REGEX}
			ref={ref}
		/>
  	);
});
export default Currency;