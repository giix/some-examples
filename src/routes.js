import { ROUTE_URLS } from "./constants";
import BeyondTheBox from "./scenes/BeyondTheBox";
import SameHeightColumn from "./scenes/SameHeightColumn";
import ThreeExample from "./scenes/ThreeExample";
import DataCamp from "./scenes/DataCamp";
import Home from "./scenes/Home";

const ROUTES = [
  {
    path: ROUTE_URLS.HOME,
    label: "Home",
    component: Home,
    exact: true
  },
  {
    path: ROUTE_URLS.BEYOND_THE_BOX,
    label: "Beyond the box",
    component: BeyondTheBox
  },
  {
    path: ROUTE_URLS.SAME_HEIGHT_COLUMN,
    label: "Same height columns",
    component: SameHeightColumn
  },
  {
    path: ROUTE_URLS.THREEJS,
    label: "ThreeJS examples",
    component: ThreeExample
  },
  {
    path: ROUTE_URLS.DATA_CAMP,
    label: "Data camp",
    component: DataCamp
  }
];

function getMenuItems(routes) {
  return routes;
}

export const MENU = getMenuItems(ROUTES);
export default ROUTES;
