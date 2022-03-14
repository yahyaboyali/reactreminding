import axios from "axios";

export default class BookService{
    getBook(){
        return axios.get("https://book-tracking-api.herokuapp.com/api/books/getAll")
    }
}