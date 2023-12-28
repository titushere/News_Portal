
import React from "react";
import image from '../assets/news.jpg';

export const Items = ({title, description, src, url}) => {
    return(
        <div className="cards">
            <img src={src} className="imgsize"  />
            <div className="leftspace">
                <a href={url?src:image}><h2 className="whitetxt">{title}</h2></a>
                <p className="whitetxt">{description}</p>
                {/* <a href={url} className="whitetxt">Read More...</a> */}
            </div>
        </div>
    );
}
