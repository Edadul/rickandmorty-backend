import { getAllPagesConcurrently } from "../api/get_all_pages.js";

export const [ list, time ] = await getAllPagesConcurrently()
console.log(list, 'Tiempo: ',time)