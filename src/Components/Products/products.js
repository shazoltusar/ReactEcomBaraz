import React from 'react'
import '../Navbar/Navbar.css';

const Products = (props) => {
    const products = props.products
    const title = props.title
    return (
        <div className=' bg-brand'>
            <div className='container py-3'>
                <h2 className='fs-5 ps-2'>{title}</h2>
                <div className='d-flex flex-wrap flashsale_container'>
                    {
                        products.map(product =>
                            <div key={product.id} className='col-lg-2 p-2 col-md-4 col-sm-6 p-2 card-body'>
                                <img src={product.image} className='img-fluid' alt='flashsale Product' />
                                <p className='card-title'>{product.name}</p>
                                <h3 className='card-price'>৳{product.price}</h3>
                                <h4 className='card-text'><strike className='text-muted'>৳{product.prevPrice}</strike> -{product.discountPrice}%</h4>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}
export default Products;
