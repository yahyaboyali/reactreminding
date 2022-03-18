
import axios from "axios";


export default class DailyRoutineService{
    
    getPersonWithBookWithWriterWithDailyRoutine(){
        return axios.get("https://book-tracking-api.herokuapp.com/api/dailyRoutine/BookWithPersonWithDailyRoutineDto")
    }
    getByBookWithPersonWithDailyRoutineDtoByPerson_personName(personName){
        return axios.get("https://book-tracking-api.herokuapp.com/api/dailyRoutine/BookWithPersonWithDailyRoutineDtoByPerson_personName?personName="+ personName)
    }
}