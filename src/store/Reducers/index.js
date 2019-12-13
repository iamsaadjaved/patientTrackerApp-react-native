import { combineReducers } from 'redux'
import SignupReducer from './signupReducer'
import LoginReducer from './loginReducer'
import PatientReducer from './patientReducer'

const rootReducer = combineReducers({
    signup : SignupReducer,
    login : LoginReducer,
    patients: PatientReducer 
})



export default rootReducer