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

  const filteredItems: { [key: string]: ProductProps } = {};

  products.forEach((product: ProductProps) => {
    const { name, pictureSrc } = product;
    const productKey = name + "->" + pictureSrc;

    if (filteredItems[productKey] === undefined) {
      filteredItems[productKey] = product;
    } else {
      const oldPrice = filteredItems[productKey].price;

      filteredItems[productKey] = { ...product, oldPrice };
    }
  });

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
          {Object.values(filteredItems).map(
            (
              { name, price, oldPrice, event, pictureSrc }: ProductProps,
              index: number
            ) => (
              <ProductCard
                name={name}
                price={price}
                oldPrice={oldPrice}
                pictureSrc={pictureSrc}
                event={event}
                onClick={setState}
                key={index}
              ></ProductCard>
            )
          )}
        </div>
      </div>
    </div>
  );
}
