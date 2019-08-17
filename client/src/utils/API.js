//axios calls to googlebooks
//calls to api routes for saving and deleting
import axios from "axios";

export default {
    //get book from googs
    getGoogleSearchBooks: function(query){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    //get all books
    getBooks: function() {
        return axios.get("/api/books");

    },
    //get book by ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //save to DB
    saveBook: function(savedBooks){
        return axios.post("/api/books", savedBooks);
    },
    //delete book from DB
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }

}