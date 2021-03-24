/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books");
    },
    
    getGoogleBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
   
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};