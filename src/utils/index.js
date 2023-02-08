import { Environment } from "../config"

export const getMapApiQuery = (query="") => {
    let newQuery = `${query}&key=${Environment.GOOGLE_PLACE_API_KEY}`
    return newQuery;
}