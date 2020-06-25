import React from "react";
import FavAction from "./FavAction";
import { Link } from "react-router-dom";

const Dog = (props) => {
	return (
		<div>
			<Link to={"/detail/" + props.name}>
				{props.name}
				<span> {"   "}</span>
			</Link>
			<FavAction
				status={props.status}
				handleClick={props.handleClick}
			></FavAction>
		</div>
	);
};

export default Dog;
