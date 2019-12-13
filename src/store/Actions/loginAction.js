class LoginAction {

    static POST_LOGIN = "POST_LOGIN"
    static POST_LOGIN_SUCCESSFULL = "POST_LOGIN_SUCCESSFULL"
    static POST_LOGIN_ERROR = "POST_LOGIN_ERROR"
    static LOG_OUT = "LOG_OUT"
    
    static postLogin(){
       return {
           type : this.POST_LOGIN
       } 
    } 

    static logout(){
        return {
            type : this.LOG_OUT
        } 
     } 

    static postLoginSuccessfull(data){
       return {
           type : this.POST_LOGIN_SUCCESSFULL,
           data : { 
                    id : data.payload.profile._id,
                    username : data.payload.profile.username ,
                    email : data.payload.profile.email ,
                   
            }
         }
       

    }

  

}



export default LoginAction