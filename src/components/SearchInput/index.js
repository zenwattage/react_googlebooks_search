import React from "react";
import "./style.css";

const SearchInput = props => {
    return (
        <form>
            <div className="form-group">
                <label className="GoogleBookSearchLabel"><p>Search for a book</p></label>
                <br>
                </br>

                <input className="col-14 form-control"
                    value={props.search}
                    type="text"
                    name="bookSearch"
                    placeholder="Type your book's Title"
                    onChange={props.handleInputChange}
                />
            </div>
        </form>
    )
}

export default SearchInput;