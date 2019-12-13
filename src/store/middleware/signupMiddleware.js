import signupAction from '../Actions/signupAction'
import axios from 'axios'


class SignupMiddleware {
    static signup(data){
        return async (dispatch) => {

              console.log( 'my data' ,data)
              dispatch(signupAction.postSignup())
              
               const response = await axios.post('https://patient-tracker-app-69.herokuapp.com/signup' , data)
            
                                
                            console.log('Response data' ,  response.data)



                            dispatch(signupAction.postSignupSuccessfull({payload : response.data}))
               
        }
    }
}

             

export default SignupMiddleware
    