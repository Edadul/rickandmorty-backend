import normalize from './normalization.js'

const API_URL = 'https://rickandmortyapi.com/api/character'

const getData = async () => {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

const data = await getData()
console.log(typeof data)

const normalizedData = await normalize(data)
console.log(normalizedData)