export const loginStart = () => ({
    type: "LOGIN_START"
})
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})
export const loginFail = (err) => ({
    type: "LOGIN_FAILURE"
})
export const logOut = () => ({
    type: "LOGOUT"
})