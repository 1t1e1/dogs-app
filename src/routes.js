import Homepage from "./containers/Homepage";
import Cavaliers from "./containers/Cavaliers";
import Goldens from "./containers/Goldens";

const routes = [
    {
        path: "/",
        isExact: true,
        component: Homepage,
        title: "Dogs App",
    },
    {
        path: "/tur/golden-retriever",
        isExact: true,
        component: Goldens,
        title: "Goldens",
    },
    {
        path: "/tur/cavalier-king-charles-spaniel",
        isExact: true,
        component: Cavaliers,
        title: "Cavaliers",
    },
];

export default routes;
