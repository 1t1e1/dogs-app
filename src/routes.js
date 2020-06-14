import React from "react";
import Homepage from "./containers/Homepage";
import FilteredDogList from "./containers/FilteredDogList";

const routes = [
	{
		path: "/",
		isExact: true,
		component: Homepage,
		title: "Dogs App",
	},
	{
		path: "/tur/:yazilanTur",
		isExact: true,
		component: FilteredDogList,
	},
	{
		path: "/about",
		isExact: false,
		component: () => <div> hakimizda </div>,
	},
	{
		path: "/:notFound",
		isExact: false,
		component: () => (
			<div>
				{" "}
				<h1> Error 404 not found</h1>
			</div>
		),
	},
];

export default routes;
