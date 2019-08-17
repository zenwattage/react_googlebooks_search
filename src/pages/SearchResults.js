import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";

class SearchResults extends Component {
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }


    handleFormSubmit = event => {
        event.preventDefault();
        //click connects to google book api
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === 'error') {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items;

                    //map array to each book
                    results = results.map(result => {
                        //store book into a new object
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            decscription: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }

                        return result;
                    })
                    //rest state of books array to the new array of ojbects with props from results
                    this.setState({ books: results, error: "" });
                }
            }).catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.books);
        let savedBooks = this.state.books.filter(book => book.id === event.target.id);
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white"> Search Google Books!</h1>
                </Jumbotron>
                    <Container>
                        <Row>
                            <Col size="12">
                                <SearchForm
                                    handleFormSubmit={this.handleFormSubmit}
                                    handleInputChange={this.handleInputChange}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Container>
                        <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                    </Container>
            </Container>

                )
            }
        }
        
export default SearchResults