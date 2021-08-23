import axios from 'axios'

export const getSuggestedPlaces = async (query: string) => {
  return await axios.get(
    `https://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${query}`
  )
}

// https://api.weatherapi.com/v1/search.json?key=620cf82228be4150bd991847211608&q=tagbilaran
