import PatientAction from '../Actions/patientAction'





const PatientReducer = (state = {

    patients : [],
    isLoading : false,
    isAuthenticated : false,

} , action) => {
     switch (action.type) {
         case PatientAction.GET_DATA : 
         return {
             ...state ,
             isLoading : true
         }
         case PatientAction.GET_DATA_SUCCESSFULL : 
         return {
             ...state ,
             isLoading : false,
             isAuthenticated : true,
             patients : action.data.patients
          
         }

        default:
            return state 
     }
}



export default PatientReducer