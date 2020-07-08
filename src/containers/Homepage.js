import React, { useState, useEffect } from "react";
import Dog from "../component/Dog";
import { ListGroup, ListGroupItem } from "reactstrap";
import dogsData from "../dogsdata";
import url from "../apiconf";
import axios from "axios";

export default function Homepage() {
	const [favs, setFavs] = useState([]);
	const [loadingFavs, setLoadingFavs] = useState(false);
	useEffect(() => {
		setLoadingFavs(true);
		axios
			.get(url)
			.then((response) => {
				setFavs(response.data);
				// setLoadingFavs(false);
				// useEffect kullandim.
				console.log(favs, "favs degistirildi");
				console.log(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		setLoadingFavs(false);
	}, [favs]);

	function toggleFav(id) {
		const foundDog = favs.find((el) => {
			return el.dogId === id;
		});

		setLoadingFavs(true);

		if (!foundDog) {
			axios
				.post(url, {
					dogId: id,
				})
				.then((response) => {
					setFavs([...favs, response.data]);
				})
				.catch(function (error) {
					console.log(error);
				});
		} else {
			axios
				.delete(`${url}/${foundDog.id}`)
				.then((response) => {
					setFavs(favs.filter((el) => el.id !== response.data.id));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	function getStatus(id) {
		return favs.find((el) => el.dogId === id);
	}

	return loadingFavs ? (
		<div>
			<h1>this is home page</h1>
			<p> Dog list loading</p>
		</div>
	) : (
		<div>
			<ListGroup>
				{dogsData.map((dog) => (
					<ListGroupItem key={dog.id}>
						<Dog
							status={getStatus(dog.id)}
							name={dog.name}
							handleClick={() => {
								toggleFav(dog.id);
							}}
						></Dog>
					</ListGroupItem>
				))}
			</ListGroup>
		</div>
	);
}
