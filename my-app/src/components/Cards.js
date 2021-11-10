import React from 'react';

function Cards(props){
    return(
    <>
    <div className="card">
        <img src={props.imgsrc} className="card-img-top" alt="Wallpapers"/> 
        <div className="card-body">
            <h5 className="card-title">{props.cardtitle}</h5>
            <p className="card-text">{props.cardtext}</p>
            <a href={props.cardlink} className="btn btn-primary" target="_blank">Watch More</a>
        </div>
    </div>
    </>
    );
}
export default Cards;