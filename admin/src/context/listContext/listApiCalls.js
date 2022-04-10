
import axios from 'axios';
import { createListFailure, createListStart, createListSuccess, DeleteListFailure, DeleteListStart, DeleteListSuccess, getListsFailure, getListsStart, getListsSuccess } from "./listAction";


export const getList =async (dispatch)=>{
    dispatch(getListsStart())
    try{
   const res = await axios.get('/lists',{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(getListsSuccess(res.data))
}catch(err){
       dispatch(getListsFailure());
    }
}

export const createLists =async (list,dispatch)=>{
    dispatch(createListStart())
    try{
   const res = await axios.post('/lists',list,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(createListSuccess(res.data))
}catch(err){
       dispatch(createListFailure());
    }
}

// export const updateMovies =async (id,dispatch)=>{
//     dispatch(updateMovieStart())
//     try{
//    const res = await axios.put('/movies/'+id,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
//     dispatch(updateMovieSuccess(res.data))
// }catch(err){
//        dispatch(updateMovieFailure());
//     }
// }



export const deleteLists =async (id,dispatch)=>{
    dispatch(DeleteListStart())
    try{
    await axios.delete('lists/'+id,{headers:{token:"Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken}})
    dispatch(DeleteListSuccess(id))
}catch(err){
       dispatch(DeleteListFailure());
    }
}
