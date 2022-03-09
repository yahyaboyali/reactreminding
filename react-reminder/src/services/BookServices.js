import axios from "axios";

export default class BookService{
    getBook(){
        return axios.get("http://localhost:8080/api/books/getAll")
    }
}