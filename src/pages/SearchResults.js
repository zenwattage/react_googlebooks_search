import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

class SearchResults extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };


    handleFormSubmit = event => {
        event.preventDefault();
        //click connects to google book api
        API.getGoogleSearchBooks(this.state.search)
        .then(res => {
            if(res.data.items === 'error') {
                throw new Error(res.data.items);
            }
        })
    }
}