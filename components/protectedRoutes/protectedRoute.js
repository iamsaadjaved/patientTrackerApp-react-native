import React from 'react';
import {  Route , Redirect } from 'react-router-native'
import jwt_decode from 'jwt-decode'
import { AsyncStorage } from 'react-native'

function PrivateRoute({ component: Component  , ...rest } , props) {
  //  const [ auth , setAuth ] = React.useState(true)
   
  //  const user = JSON.parse(localStorage.getItem('user'))
  // const token = localStorage.getItem('token')
  // let decode = jwt_decode(token)
  // console.log('decode token' , Boolean(decode) )   
  
  const checkAuth = async () => {
    const token = await AsyncStorage.getItem('token')
    if(!token){
      return false
    }  

    try {
      
     jwt_decode(token)
      
    }catch(e){
      await AsyncStorage.removeItem('token')

      return false
    }
    return true
  }
  
  return (
     <Route
       {...rest}
       render={() =>
        checkAuth() ?  (
            <Component />
         ) : (
           props.history.push('/login')
         )
       }
     />
    );
  }

  export default PrivateRoute