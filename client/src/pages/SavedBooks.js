import React, { Component } from "react";
import { Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };
    //get all books in db on mount
    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }
    //remove book by id
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedBooks savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}



export default SaveBook 