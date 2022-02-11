import React from 'react';
import './App.css';
import ProductSection from './ProductSection';


function App() {

  const items = [
    { name: 'hoody-A', price: 2001, event: new Date('mar 11, 2022 11:30:00 pm'), pictureSrc: "https://image.shutterstock.com/image-vector/vector-cartoon-illustration-pink-hoodie-260nw-1420438379.jpg" },
    { name: 'hoody-B', price: 1900, event: new Date('mar 30, 2022 8:00:00 pm'), pictureSrc: "https://cdn2.vectorstock.com/i/thumb-large/94/01/a-sticker-template-with-red-hoodie-isolated-vector-38389401.jpg" },
    { name: 'hoody-C', price: 2100, event: new Date('mar 11, 2022 1:30:00 pm'), pictureSrc: "https://image.shutterstock.com/image-vector/vector-cartoon-illustration-pink-hoodie-260nw-1420438379.jpg" },
    { name: 'hoody-A', price: 2002, event: new Date('mar 11, 2022 11:30:00 pm'), pictureSrc: "https://image.shutterstock.com/image-vector/vector-cartoon-illustration-pink-hoodie-260nw-1420438379.jpg" },
    { name: 'hoody-D', price: 2050, event: new Date('mar 21, 2022 1:40:00 pm'), pictureSrc: "https://thumbs.dreamstime.com/b/vector-single-cartoon-illustration-red-hoodie-sweatshirt-128756703.jpg" },
    { name: 'hoody-E', price: 1859, event: new Date('mar 21, 2022 12:00:00 am'), pictureSrc: "https://thumbs.dreamstime.com/b/hoodie-hood-blue-warm-clothing-sweatshirt-handles-cartoon-flat-illustration-isolated-white-background-193526021.jpg" },
    { name: 'hoody-A', price: 2003, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://image.shutterstock.com/image-vector/vector-cartoon-illustration-pink-hoodie-260nw-1420438379.jpg" },
    { name: 'hoody-b', price: 2001, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://cdn4.vectorstock.com/i/1000x1000/82/98/men-hoodies-icon-cartoon-vector-13948298.jpg" },
    { name: 'hoody-A', price: 2000, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://htdraw.com/wp-content/uploads/2020/09/how-to-draw-a-hoodie-370x297.jpg" },
    { name: 'hoody-b', price: 2002, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://cdn4.vectorstock.com/i/1000x1000/82/98/men-hoodies-icon-cartoon-vector-13948298.jpg" },
    { name: 'hoody-A', price: 2000, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://htdraw.com/wp-content/uploads/2020/09/how-to-draw-a-hoodie-370x297.jpg" },
    { name: 'hoody-A', price: 2001, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://thumbs.dreamstime.com/b/hoodie-hood-red-warm-clothing-sweatshirt-handles-cartoon-flat-illustration-isolated-white-background-211829106.jpg" },
    { name: 'hoody-A', price: 2002, event: new Date('mar 11, 2022 1:23:01 pm'), pictureSrc: "https://thumbs.dreamstime.com/b/hoodie-hood-red-warm-clothing-sweatshirt-handles-cartoon-flat-illustration-isolated-white-background-211829106.jpg" }
  ]


  return (
    <div className="container-fluid  px-0">
      <nav className="navbar navbar-light fixed-top bg-danger" >
        <div className="container-fluid">
          <h1 className="title-h">SALE</h1>
        </div>
      </nav>
      <div className="d-flex flex-row-reverse px-5 pt-4 mt-5">
        <h2>
          BIG Brand SALE
        </h2>
      </div>
      <div className="d-flex px-5">
        <h3>
          Avail Mega Sale up to 50% off!!!
        </h3>
      </div>

      <div className='container-fluid px-0'>
        <ProductSection products={items}></ProductSection>
      </div>
      <div className="d-flex  px-5 pt-5">
        <h3>
          Avail Mega Sale up to 50% OFF!!! Buy Now!!!!!!
        </h3>
      </div>

      <div className='container-fluid px-0'>
        <ProductSection products={items}></ProductSection>
      </div>



    </div>


  );
}



export default App;
