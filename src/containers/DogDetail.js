import React from "react";

export default function DogDetail(props) {
	return (
		<div>
			<h1> Dog detail page </h1>
			<h1> {props.match.params.dogId}</h1>
			<p>what</p>
		</div>
	);
}
