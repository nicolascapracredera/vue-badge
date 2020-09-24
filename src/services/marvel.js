/*jshint esversion: 6 */


const API_ENDPOINT = "https://gateway.marvel.com/v1/public/characters?apikey=098ff255136d88ff5f72e282bae3e091";
const axios = require('axios').default;

export async function getMarvelCharacters(callback, page) {
    var offset = (page - 1) * 20;
    const d = await axios.get(API_ENDPOINT, {
        params: {
            offset: offset
        }
    });
    callback(d.data.data.results);
}