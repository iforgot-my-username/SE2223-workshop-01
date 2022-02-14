import React from 'react';
import Product from './product';
import logo from './logo.svg'
import './ProductCard.css';

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const { saleDate, onClick, name, price, pictureSrc, markDown } = product
    const formatedPrice = price.toFixed(2);
    const currentPrice = (markDown ?? price).toFixed(2)

    function handleSetSate() {
        onClick(saleDate);
    }

    return (
        <>
            <div className="d-inline-flex flex-column container-div py-3 m-2 px-2 mw-1">
                <div className="row-1">
                    <img className="img-thumbnail img-div shadow" src={pictureSrc ?? logo} alt={name}></img>
                </div>
                <div className="row-1 mt-1 overflow-auto">
                    <h5>{name}</h5>
                </div>
                <div className="d-inline-flex flex-row mt-1 overflow-auto">
                    {markDown && <div className="col mr-2 opacity-50">
                        <p><del>₱{formatedPrice}</del></p>
                    </div>}
                    <div className="col ml-5">
                        <h6>₱{currentPrice}</h6>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    < button className="btn btn-danger shadow" onClick={handleSetSate} >Check Sale!</ button >
                </div>
            </div>
        </>
    )
}

