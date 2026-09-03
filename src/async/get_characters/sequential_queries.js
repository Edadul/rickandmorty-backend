import { getAllpages } from "../api/get_all_pages.js";

export const [ lista, time ] = await getAllpages()
console.log(lista)