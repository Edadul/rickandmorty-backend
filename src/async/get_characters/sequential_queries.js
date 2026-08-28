import { getCharacters } from "../index.js";
import { API } from "../index.js";

function getPage (page) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(
            getCharacters({api: API.concat(`?page=${page}`)})
        ), 300)
    })
}

async function getAllpages() {
    const initTime = performance.now()
    let characters = []
    
    for (let i=1; i<=42; i++) {
        const page = await getPage(i);
        characters.push(page.results)
    }
    const endTime = performance.now()
    return [characters, `Time: ${endTime - initTime}`]
} 

export const [ lista, time ] = await getAllpages()