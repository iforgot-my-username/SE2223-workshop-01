import React, { useState } from 'react';
import DurationTimer from './DurationTimer';
import ProductCard from './ProductCard';
import './ProductSection.css';

interface ProductProps {
    name: string;
    price: number;
    markDown?: number;
    saleDate: Date;
    pictureSrc?: string;
}

interface ProductSectionProps {
    products: ProductProps[];
}

export default function ProductSection({ products }: ProductSectionProps) {
    const [saleDate, setSaleDate] = useState('');


    function setState(date: Date) {
        const strDate = date.toString();

        if (saleDate === '') {
            setSaleDate(strDate);

        } else {
            new Promise(
                (resolve, reject) => {
                    setSaleDate('');
                    resolve(true);
                }
            ).then(
                () => {
                    setSaleDate(strDate);
                }
            );
        }
    }

    function Close() {
        setSaleDate('');
    }


    return (
        <div className="container-fluid section-div shadow pt-3">
            <div className="col ">
                <div className="row ">
                    <div className="d-flex flex-row-reverse px-5 pb-3 overflow-auto">
                        < div className="align-self-top">
                            {saleDate && <button className="btn btn-danger shadow rounded-pill" onClick={Close}>X</button>}
                        </div>
                        {saleDate && <DurationTimer end={new Date(saleDate)} />}
                    </div>
                </div>
                <div className="d-flex product-div overflow-auto">
                    {products.map((product, index) => {
                        const key = product.name + index.toString()
                        return <ProductCard product={{ ...product, onClick: setState }} key={key}></ProductCard>
                    })
                    }

                </div>
            </div>
        </div >
    );
}