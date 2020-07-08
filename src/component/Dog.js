import React, { Component } from "react";
import FavAction from "./FavAction";
import { Link } from "react-router-dom";

export default class Dog extends Component {
	componentDidMount() {
		console.log("dog did mount");
	}
	componentWillUnmount() {
		console.log("dog will unmount");
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.status === nextProps.status) return false;
		return true;
	}

	render() {
		if (this.props.name === "MAPLE")
			console.log("Dog rendered ", this.props.name);
		return (
			<div>
				<Link to={"/detail/" + this.props.name}>
					{this.props.name}
					<span> {"   "}</span>
				</Link>
				<FavAction
					status={this.props.status}
					handleClick={this.props.handleClick}
				></FavAction>
			</div>
		);
	}
}
