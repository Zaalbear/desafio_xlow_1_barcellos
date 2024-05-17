import { render } from "./render.js";
import { getAllProducts } from "./requests.js";
import { toggleGrid } from "./toggleGrid.js";

render(await getAllProducts());
toggleGrid()