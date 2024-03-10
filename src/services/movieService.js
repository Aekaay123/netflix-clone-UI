const key='094294b5374363057d33df265ef0341c';
const baseURL='https://api.themoviedb.org/3'

const endpoints={
    popular:`${baseURL}/movie/popular?api_key=${key}`,
    topRated:`${baseURL}/movie/top_rated?api_key=${key}`,
    trending:`${baseURL}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedey:`${baseURL}/search/movie?api_key=${key}&language=en-US&query=comedey&page=1&include_adult=false`,
    upcoming:`${baseURL}/movie/upcoming?api_key=${key}`,
}

export function imageURL(filename,size){
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}

export default endpoints;