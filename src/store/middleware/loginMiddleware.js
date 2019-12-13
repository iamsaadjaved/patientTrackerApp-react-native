import LoginAction from '../Actions/loginAction'
import axios from 'axios'
import {AsyncStorage} from '@react-native-community/async-storage';


class LoginMiddleware {

    static login(data){
        return async (dispatch) => {

            dispatch(LoginAction.postLogin())
               console.log( 'my data' ,data)
         try{
             const response = await axios.post('https://patient-tracker-app-69.herokuapp.com/login' , data)
               

                // await AsyncStorage.setItem("token" , response.data.token )

                // localStorage.setItem('user' , JSON.stringify(response.data.profile))
    
                console.log('Response data usernamw' ,  response.data.username)

                dispatch(LoginAction.postLoginSuccessfull({payload : response.data}))
                
                // window.location.href = '/account' 
                        

         }catch(error){
             console.error("ERROR! :" , error)
         }

               
               
        }
    }
}

             

export default LoginMiddleware
    