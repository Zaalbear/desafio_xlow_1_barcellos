import { render } from "./render.js";
import { getAllProducts, getProduct } from "./requests.js";

render(await getAllProducts());