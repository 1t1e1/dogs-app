import React from "react";
import { Button } from "reactstrap";

const Dog = (props) => {
	if (props.status) {
		return (
			<div>
				{props.name}
				<span> {"   "}</span>
				<Button onClick={props.handleClick} color="danger">
					Favorilerden Cikar
				</Button>
			</div>
		);
	} else {
		return (
			<div>
				{props.name}
				<span> {"   "}</span>
				<Button color="primary" onClick={props.handleClick}>
					Favorilere Ekle
				</Button>
			</div>
		);
	}
};

export default Dog;
