// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

export default interface Product {
    name: string;
    price: number;
    markDown?: number;
    pictureSrc?: string;
    saleDate: Date;
    onClick: Function;
}