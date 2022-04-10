import { loginFail, loginStart, loginSuccess, logOut } from "./authAction"
import axios from "axios";


export const login = async (user, dispatch) => {
  dispatch(loginStart())
  try {
    const res = await axios.post("auth/login", user)
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail())
  }
}
export const logout = async (dispatch) => {

  try {
    dispatch(logOut())
  } catch (err) {
    console.log("error")
  }


}