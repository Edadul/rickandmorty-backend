import { API } from "../index.js"
import { getCharacters } from "./get_characters.js"

export function getPage (page) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(
            getCharacters({api: API.concat(`?page=${page}`)})
        ), 300)
    })
}