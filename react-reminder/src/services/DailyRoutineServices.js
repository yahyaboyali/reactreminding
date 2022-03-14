
import axios from "axios";


export default class DailyRoutineService{
    
    getPersonWithBookWithWriterWithDailyRoutine(){
        return axios.get("https://book-tracking-api.herokuapp.com/api/dailyRoutine/BookWithPersonWithDailyRoutineDto")
    }
}