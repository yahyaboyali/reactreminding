
import axios from "axios";


export default class DailyRoutineService{
    
    getPersonWithBookWithWriterWithDailyRoutine(){
        return axios.get("http://localhost:8080/api/dailyRoutine/BookWithPersonWithDailyRoutineDto")
    }
    getByBookWithPersonWithDailyRoutineDtoByPerson_personName(personName){
        return axios.get("http://localhost:8080/api/dailyRoutine/BookWithPersonWithDailyRoutineDtoByPerson_personName?personName="+ personName)
    }
}