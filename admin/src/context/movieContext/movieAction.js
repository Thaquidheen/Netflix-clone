export const getMovieStart = ()=>({
    type:"GET_MOVIE_START"
})
export const getMovieSuccess = (movies)=>({
    type:"GET_MOVIE_SUCCESS",
    payload:movies
})
export const getMovieFailure = (err)=>({
    type:"GET_MOVIE_Failure"
})
export const createMovieStart = ()=>({
    type:"CREATE_MOVIE_START"
})
export const createMovieSuccess = (movie)=>({
    type:"CREATE_MOVIE_SUCCESS",
    payload:movie
})
export const createMovieFailure = (err)=>({
    type:"CREATE_MOVIE_Failure"
})
export const updateMovieStart = ()=>({
    type:"UPDATE_MOVIE_START"
})
export const updateMovieSuccess = (movie)=>({
    type:"UPDATE_MOVIE_SUCCESS",
    payload:movie
})
export const updateMovieFailure = (err)=>({
    type:"UPDATE_MOVIE_Failure"
})

export const DeleteMovieStart = ()=>({
    type:"DELETE_MOVIE_START"
})
export const DeleteMovieSuccess = (id)=>({
    type:"DELETE_MOVIE_SUCCESS",
    payload:id
})
export const DeleteMovieFailure = (err)=>({
    type:"DELETE_MOVIE_FAILURE"
})
