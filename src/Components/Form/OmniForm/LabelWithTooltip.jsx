import React from 'react';
import Popover from "../../Popover/Popover";
import AnimateOnHover from "../../AnimateOnHover/AnimateOnHover";
import styles from './form.scss'

export default function LabelWithTooltip(props) {
  	const [parentRef, setParentRef] = React.useState();
  	return (
		<div ref={r => setParentRef(r)} style={{position:'relative'}}>
			{props.label}
			<Popover
				content={props.popoverContent}
				containerEle={parentRef}
				className={styles['omni-form-popover']}
			>
				<div
					className={styles['form-tooltip']}
				>
					<i
						className="icon-infoCircle"
						style={{ fontSize: "12px", color: "#7D7D7D" }}
					/>
				</div>
			</Popover>
		</div>
	);
};