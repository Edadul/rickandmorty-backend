import { getPage } from "./get_page.js";

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