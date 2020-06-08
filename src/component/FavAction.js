import React from "react";
import { Button } from "reactstrap";

const FavAction = (props) => {
	if (props.status) {
		return (
			<Button onClick={props.handleClick} color="danger">
				Favorilerden Cikar
			</Button>
		);
	} else {
		return (
			<Button color="primary" onClick={props.handleClick}>
				Favorilere Ekle
			</Button>
		);
	}
};

export default FavAction;
