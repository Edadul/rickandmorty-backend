import { getAllpages } from "../api/get_all_pages.js";

export const [ list, time ] = await getAllpages()
console.log(list, 'Tiempo: ', time)