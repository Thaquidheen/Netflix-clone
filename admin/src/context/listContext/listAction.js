export const getListsStart = ()=>({
    type:"GET_LIST_START"
})
export const getListsSuccess = (lists)=>({
    type:"GET_LIST_SUCCESS",
    payload:lists
})
export const getListsFailure = (err)=>({
    type:"GET_LIST_Failure"
})
export const createListStart = ()=>({
    type:"CREATE_LIST_START"
})
export const createListSuccess = (list)=>({
    type:"CREATE_LIST_SUCCESS",
    payload:list
})
export const createListFailure = (err)=>({
    type:"CREATE_LIST_Failure"
})
// export const updateMovieStart = ()=>({
//     type:"UPDATE_MOVIE_START"
// })
// export const updateMovieSuccess = (movie)=>({
//     type:"UPDATE_MOVIE_SUCCESS",
//     payload:movie
// })
// export const updateMovieFailure = (err)=>({
//     type:"UPDATE_MOVIE_Failure"
// })

export const DeleteListStart = ()=>({
    type:"DELETE_LIST_START"
})
export const DeleteListSuccess = (id)=>({
    type:"DELETE_LIST_SUCCESS",
    payload:id
})
export const DeleteListFailure = (err)=>({
    type:"DELETE_LIST_FAILURE"
})
