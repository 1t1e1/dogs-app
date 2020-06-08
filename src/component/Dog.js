import React from "react";
import FavAction from "./FavAction";

const Dog = (props) => {
	return (
		<div>
			{props.name}
			<span> {"   "}</span>
			<FavAction
				status={props.status}
				handleClick={props.handleClick}
			></FavAction>
		</div>
	);
};

export default Dog;
