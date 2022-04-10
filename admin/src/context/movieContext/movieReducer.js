const MovieReducer = (state,action)=>{
      switch(action.type){
          case "GET_MOVIE_START":
              return{
               movies:[],
               isFetching:true,
               err:false
              }
              case "GET_MOVIE_SUCCESS":
                return{
                    movies:action.payload,
                    isFetching:false,
                    err:false
                }
                case "GET_MOVIE_Failure":
                    return{
                        movies:null,
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
                              case "UPDATE_MOVIE_START":
                                return{
                                 ...state,
                                 isFetching:true,
                                 err:false
                                }
                                case "UPDATE_MOVIE_SUCCESS":
                                  return{
                                      movies:[state.movies.map((movie)=>movie._id === action.payload._id && action.payload)],
                                      isFetching:false,
                                      err:false
                                  }
                                  case "UPDATE_MOVIE_Failure":
                                      return{
                                         ...state,
                                          isFetching:false,
                                          err:true
                                      } 
                         case "DELETE_MOVIE_START":
                        return{
                         ...state,
                         isFetching:true,
                         err:false
                        }
                        case "DELETE_MOVIE_SUCCESS":
                          return{
                              movies:state.movies.filter((movie)=>movie._id !== action.payload),
                              isFetching:false,
                              err:false
                          }
                          case "DELETE_MOVIE_FAILURE":
                              return{
                                  ...state,
                                  isFetching:false,
                                  err:true
                              }
                            
                    default:
                      return  {...state}
                
      }
}

export default MovieReducer;