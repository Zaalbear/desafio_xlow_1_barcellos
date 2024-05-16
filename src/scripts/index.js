import { render } from "./render.js";
import { getAllProducts } from "./requests.js";

console.log(await getAllProducts())
render(await getAllProducts());