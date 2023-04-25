import axios from '../custom-axios/axios';

const LibraryService = {
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories() {
        return axios.get("/books/categories");
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    addBook: (book)  => {
        return axios.post("/books/addBook", book);
    },
    editBook: (id,book)  => {
        return axios.put(`/books/editBook/${id}`, book);
    },
    deleteBook: (id) => {
        return axios.delete(`/books/deleteBook/${id}`);
    },
    markAsTaken: (id) => {
        return axios.get(`books/AvailableCopies/${id}`);
    },
}
export default LibraryService;