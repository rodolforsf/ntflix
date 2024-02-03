import React from "react";
import './MovieRow.css';

const MovieRow = ({ title, items }) => {
    return (
        <div className="MovieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items && items.results && items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original?.title } />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default MovieRow;
