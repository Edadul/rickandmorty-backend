export async function getCharacters ({ api }) {
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching characters:', error)
        throw error
    }
}