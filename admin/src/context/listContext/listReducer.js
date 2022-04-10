const ListReducer = (state,action)=>{
      switch(action.type){
          case "GET_LIST_START":
              return{
               lists:[],
               isFetching:true,
               err:false
              }
              case "GET_LIST_SUCCESS":
                return{
                    lists:action.payload,
                    isFetching:false,
                    err:false
                }
                case "GET_MOVIE_Failure":
                    return{
                        lists:null,
                        isFetching:false,
                        err:true
                    }
                    case "CREATE_MOVIE_START":
                        return{
                         ...state,
                         isFetching:true,
                         err:false
                        }
                        case "CREATE_MOVIE_SUCCESS":
                          return{
                              movies:[...state.movies, action.payload],
                              isFetching:false,
                              err:false
                          }
                          case "CREATE_MOVIE_Failure":
                              return{
                                 ...state,
                                  isFetching:false,
                                  err:true
                              } 
                    //           case "UPDATE_MOVIE_START":
                    //             return{
                    //              ...state,
                    //              isFetching:true,
                    //              err:false
                    //             }
                    //             case "UPDATE_MOVIE_SUCCESS":
                    //               return{
                    //                   movies:[state.movies.map((movie)=>movie._id === action.payload._id && action.payload)],
                    //                   isFetching:false,
                    //                   err:false
                    //               }
                    //               case "UPDATE_MOVIE_Failure":
                    //                   return{
                    //                      ...state,
                    //                       isFetching:false,
                    //                       err:true
                    //                   } 
                         case "DELETE_LIST_START":
                        return{
                         ...state,
                         isFetching:true,
                         err:false
                        }
                        case "DELETE_LIST_SUCCESS":
                          return{
                              lists:state.lists.filter((list)=>list._id !== action.payload),
                              isFetching:false,
                              err:false
                          }
                          case "DELETE_LIST_FAILURE":
                              return{
                                  ...state,
                                  isFetching:false,
                                  err:true
                              }
                            
                    default:
                      return  {...state}
                
      }
}

export default ListReducer;