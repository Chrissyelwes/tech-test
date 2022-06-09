// eslint-disable-next-line
import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = () => {
    // eslint-disable-next-line
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(value);
    };

    return(
        <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
        <input
            className="search-input"
            type="text" 
            onChange={(e) => setValue(e.target.value)}
        />
        {/* this will save the users search query every time there is a change within the input */}
            <button className="search-btn" type="submit">
                Search
            </button>
        </form>
        </div>
    )
};

export default Search;
