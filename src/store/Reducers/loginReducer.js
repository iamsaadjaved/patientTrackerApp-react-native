import LoginAction from "../Actions/loginAction";




const LoginReducer = (state = {
    
    id : '',
    username : '',
    email : '',
    isLoading : false,
    isAuthenticated : false,

} , action) => {
     switch (action.type) {
         case LoginAction.POST_LOGIN : 
         return {
             ...state ,
             isLoading : true
         }
         case LoginAction.POST_LOGIN_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : false,
             isAuthenticated : true,
             id : action.data.id,
             username : action.data.username,
             email : action.data.email,
         }
         case LoginAction.LOGIN_OUT : 
         return {
             ...state ,
             isAuthenticated : false
         }
         

        default:
            return state 
     }
}



export default LoginReducer