import React, { Component } from "react";
import Dog from "../component/Dog";
import { ListGroup, ListGroupItem } from "reactstrap";
import dogsData from "../dogsdata";

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = { favs: [] };
	}

	toggleFav = (id, name) => {
		const favs = [...this.state.favs];
		const indexOfId = favs.indexOf(id);

		if (indexOfId === -1) {
			this.setState({ favs: [...favs, id] });
		} else {
			favs.splice(indexOfId, 1);
			this.setState({ favs: favs });
		}
	};

	getStatus = (id) => {
		const favs = this.state.favs;
		return favs.includes(id);
	};

	render() {
		return (
			<div>
				<h1>this is home page</h1>
				<ListGroup>
					{dogsData.map((dog) => (
						<ListGroupItem key={dog.id}>
							<Dog
								status={this.getStatus(dog.id)}
								name={dog.name}
								handleClick={() => {
									this.toggleFav(dog.id);
								}}
							></Dog>
						</ListGroupItem>
					))}
				</ListGroup>
			</div>
		);
	}
}
