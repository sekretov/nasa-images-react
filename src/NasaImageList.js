import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function NasaImageList(props) {
    const images = props.images;
    return (
        <ul>
            {!images ? 'Loading...' : images.map(image => (
                <li key={image.data[0].nasa_id}>
                    <Link to={`/image/${image.data[0].nasa_id}`}>{image.data[0].title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default NasaImageList;