import { getCharacters } from "./get_characters.js";
import { getPage } from "./get_page.js";
import { API } from "./url.js";

export async function getAllpages() {
    const initTime = performance.now()
    let characters = []
    console.log('Fetching all pages, please wait...')
    for (let i=1; i<=42; i++) {
        const page = await getPage(i);
        characters.push(page.results)
    }
    const endTime = performance.now()
    return [characters, `Time: ${endTime - initTime}`]
}


//Using Promise.all to fetch all pages concurrently
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function getAllPagesConcurrently() {
    const initTime = performance.now()
    console.log('Fetching all pages concurrently, please wait...')
    const concurrencyLimit = 3;
    const pages = []
    for (let i=1; i<=42; i+=concurrencyLimit) {
        const batchPromises = []
        for (let j=i; j<i+concurrencyLimit && j<=42; j++) {
            batchPromises.push(getCharacters({api: API.concat(`?page=${j}`)}))
        }
        const batchResults = await Promise.all(batchPromises)
        pages.push(...batchResults)
        await delay(950);
    }
    const characters = pages.map(page => page.results)
    const endTime = performance.now()
    return [characters, `Time: ${endTime - initTime}`]
}