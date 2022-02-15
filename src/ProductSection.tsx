import React, { useState } from "react";
import DurationTimer from "./DurationTimer";
import ProductCard from "./ProductCard";
import "./ProductSection.css";

interface ProductProps {
  name: string;
  price: number;
  oldPrice?: number;
  event: Date;
  pictureSrc: string;
}

interface ProductSectionProps {
  products: ProductProps[];
}

export default function ProductSection({ products }: ProductSectionProps) {
  const [saleDate, setsaleDate] = useState("");

  function setState(date: Date) {
    const strDate = date.toString();

    if (saleDate === "") {
      setsaleDate(strDate);
    } else {
      new Promise((resolve, reject) => {
        setsaleDate("");
        resolve(true);
      }).then(() => {
        setsaleDate(strDate);
      });
    }
  }

  function Close() {
    setsaleDate("");
  }

  const itemPrices: { [key: string]: number } = {};

  return (
    <div className="container-fluid section-div shadow pt-3">
      <div className="col ">
        <div className="row ">
          <div className="d-flex flex-row-reverse px-5 pb-3 overflow-auto">
            <div className="align-self-top">
              {saleDate && (
                <button
                  className="btn btn-danger shadow rounded-pill"
                  onClick={Close}
                >
                  X
                </button>
              )}
            </div>
            {saleDate && <DurationTimer end={new Date(saleDate)} />}
          </div>
        </div>
        <div className="d-flex product-div overflow-auto">
          {products.map(
            (
              { name, price, event, pictureSrc }: ProductProps,
              index: number
            ) => {
              const key = name + "->" + pictureSrc;
              itemPrices[key] = price;
              if (itemPrices[key] === undefined) {
                return (
                  <ProductCard
                    name={name}
                    price={price}
                    pictureSrc={pictureSrc}
                    event={event}
                    onClick={setState}
                    key={index}
                  ></ProductCard>
                );
              }

              return (
                <ProductCard
                  name={name}
                  price={price}
                  pictureSrc={pictureSrc}
                  event={event}
                  onClick={setState}
                  oldPrice={itemPrices[key]}
                  key={index}
                ></ProductCard>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
