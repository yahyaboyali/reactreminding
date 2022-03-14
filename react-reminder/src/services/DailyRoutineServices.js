
import axios from "axios";


export default class DailyRoutineService{
    
    getPersonWithBookWithWriterWithDailyRoutine(){
        return axios.get("https://book-tracking-api.herokuapp.com/api/dailyRoutine/BookWithPersonWithDailyRoutineDto")
    }
    getPersonNameAndDailyRoutine(personName){
        return axios.get("http://localhost:8080/api/dailyRoutine/BookWithPersonWithDailyRoutineDtoByPerson_personName?personName="+personName)
    }
}