import { getPage } from "./sequential_queries.js";
import { API, getCharacters } from "../index.js";

let promiseList = [];
let characters = [];

const get_character = (i) => {
    return new Promise(async (resolve) => {
        setTimeout(() => resolve (
            getCharacters({api: API.concat(`?page=${i}`)})
        ), 100);
    })
}

// for (let i=1; i<=42; i++) {
//     promiseList.push(get_character(i))
// }

console.log(get_character(1))