import React from 'react';
import NumberField from './NumberField';
const currencyRegex = /^\d{0,}(\.\d{0,})?$/

const Currency = React.forwardRef((props,ref) => {
	return (
		<NumberField
			{...props}
			regex={currencyRegex}
			ref={ref}
		/>
  	);
});
export default Currency;