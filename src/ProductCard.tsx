import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
    name: string;
    price: number;
    pictureSrc: string;
    event: Date;
    onClick: Function;
}

export default function ProductCard({ event, onClick, name, price, pictureSrc }: ProductCardProps) {
    const formatedPrice = price.toFixed(2);

    function handleSetSate() {
        onClick(event);
    }

    return (
        <>
            <div className="d-inline-flex flex-column container-div py-3 m-2 px-2 mw-1">
                <div className="row-1">
                    <img className="img-thumbnail img-div shadow" src={pictureSrc} alt="Responsive"></img>
                </div>
                <div className="row-2 mt-1 overflow-auto">
                    <h5>{name}</h5>
                </div>
                <div className="row-2 mt-1 overflow-auto">
                    <h6>₱{formatedPrice}</h6>
                </div>
                <div className="row-2">
                    < button className="btn btn-danger shadow" onClick={handleSetSate} >Check Sale!</ button >
                </div>
            </div>
        </>
    )
}

