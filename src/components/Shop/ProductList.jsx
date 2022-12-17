import React from 'react'
import Product from './Product'

const DUMMY_DATA = [
    {id: 1, name: 'Product 1', title: 'This is product 1 title', price: 10.00},
    {id: 2, name: 'Product 2', title: 'This is product 2 title', price: 11.00},
    {id: 3, name: 'Product 3', title: 'This is product 3 title', price: 12.00},
    {id: 4, name: 'Product 4', title: 'This is product 4 title', price: 13.00},
    {id: 5, name: 'Product 5', title: 'This is product 5 title', price: 14.00},
    {id: 6, name: 'Product 6', title: 'This is product 6 title', price: 15.00}
];

const ProductList = () => {

    const productList = DUMMY_DATA.map((product) => (
        <Product key={product.id} name={product.name} title={product.title} price={product.price} />
    ))

  return (
    <div>
        {productList}
    </div>
  )
}

export default ProductList