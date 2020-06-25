import React, { Component } from "react";
import Dog from "../component/Dog";
import { ListGroup, ListGroupItem } from "reactstrap";
import dogsData from "../dogsdata";
import url from "../apiconf";
import axios from "axios";

export default class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favs: [],
			loadingFavorites: false,
		};
	}

	componentDidMount() {
		this.setState({
			loadingFavorites: true,
		});
		axios
			.get(url)
			.then((response) => {
				this.setState({
					favs: response.data,
					loadingFavorites: false,
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	toggleFav = (id) => {
		const favs = [...this.state.favs];
		const foundDog = favs.find((el) => {
			return el.dogId === id;
		});

		this.setState({
			loadingFavorites: true,
		});

		if (!foundDog) {
			axios
				.post(url, {
					dogId: id,
				})
				.then((response) => {
					this.setState({
						favs: [...favs, response.data],
						loadingFavorites: false,
					});
				})
				.catch(function (error) {
					console.log(error);
					this.setState({
						loadingFavorites: false,
					});
				});
		} else {
			axios
				.delete(`${url}/${foundDog.id}`)
				.then((response) => {
					this.setState({
						favs: this.state.favs.filter((el) => el.id !== response.data.id),
						loadingFavorites: false,
					});
				})
				.catch(function (error) {
					console.log(error);
					this.setState({
						loadingFavorites: false,
					});
				});
		}
	};

	getStatus = (id) => {
		const favs = this.state.favs;
		return favs.find((el) => el.dogId === id);
	};

	render() {
		if (this.state.loadingFavorites) {
			return (
				<div>
					<h1>this is home page</h1>
					<p> Dog list loading</p>
				</div>
			);
		} else {
			return (
				<div>
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
}
