import React, { Component } from "react";
import Dog from "../component/Dog";
import { ListGroup, ListGroupItem } from "reactstrap";
import dogsData from "../dogsdata";
import url from "../apiconf";

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = { favs: [] };
	}

	componentDidMount() {
		fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				this.setState({ favs: json });
			});
	}

	toggleFav = (id) => {
		const favs = [...this.state.favs];
		const foundDog = favs.find((el) => {
			return el.dogId === id;
		});

		if (!foundDog) {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				},
				body: JSON.stringify({ dogId: id }),
			})
				.then((result) => result.json())
				.then((data) => {
					console.log(data);
					this.setState({ favs: [...favs, data] });
					return data;
				})
				.catch((err) => console.log(err));
			// });
		} else {
			const indexOf = favs.indexOf(foundDog);
			favs.splice(indexOf, 1);
			console.log("this is founddd", foundDog);

			fetch(url + "/" + foundDog.id, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				},
			})
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((response) => {
					console.log(response);
					this.setState({ favs: favs });
					return response;
				})
				.catch((err) => console.log(err));
		}
	};

	getStatus = (id) => {
		const favs = this.state.favs;
		return favs.find((el) => el.dogId === id);
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
