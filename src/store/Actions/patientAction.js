class PatientAction {

    static GET_DATA = "GET_DATA"
    static GET_DATA_SUCCESSFULL = "GET_DATA_SUCCESSFULL"
    static GET_DATA_ERROR = "GET_DATA_ERROR"

    static getData (){
       return {
           type : this.GET_DATA
       } 
    } 

    static getDataSuccessfull(data){
       return {
           type : this.GET_DATA_SUCCESSFULL,
           data : { 
                    patients : data.payload
            }
         }
       

    }

  

}



export default PatientAction