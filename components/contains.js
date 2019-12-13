export const contains = ( { PatientName } , query ) => {
    if(PatientName.includes(query) ){
        return true
    }

    return false


}