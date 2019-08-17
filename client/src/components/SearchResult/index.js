import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";


const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h1>Search Results</h1>
                </div>
            </div>
        </div>
    )
        :
        (
            <div className="card">
                <div className="article">
                    <h1>Search Results</h1>
                    {props.books.map(book => {
                        return (
                            <li className="search-list list-group-item">
                                <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                    <Col size="2" className="bookImage">
                                        <img src={book.image} alt={book.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol" />
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <h3 className="bookTitle">{book.title}</h3>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{book.author}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{book.description}</p>
                                        </Row>
                                    </Col>
                                </Row>

                                <br></br>
                                
                                <Row className="buttonDiv ">
                                    <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                        Save Book
                                        </button>
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        )
}
export default SearchResult