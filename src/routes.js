import Homepage from "./containers/Homepage";
import Cavaliers from "./containers/Cavaliers";
import Goldens from "./containers/Goldens";

const routes = [
    {
        path: "/",
        isExact: true,
        component: Homepage,
    },
    {
        path: "/tur/golden-retriever",
        isExact: true,
        component: Goldens,
    },
    {
        path: "/tur/cavalier-king-charles-spaniel",
        isExact: true,
        component: Cavaliers,
    },
];

export default routes;
