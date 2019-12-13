import PatientAction from '../Actions/patientAction'
import axios from 'axios'


class PatientMiddleware {

    static getData (){
        return async (dispatch) => {

            dispatch(PatientAction.getData())
         try{
                const response = await axios.get('https://patient-tracker-app-69.herokuapp.com/patientData')
               
                dispatch(PatientAction.getDataSuccessfull({payload : response.data}))
                        
         }catch(error){
             console.error("ERROR! :" , error)
         }
               
        }
    }
}

             

export default PatientMiddleware
    