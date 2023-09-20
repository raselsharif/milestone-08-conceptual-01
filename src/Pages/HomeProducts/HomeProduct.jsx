import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const HomeProduct = () => {
    const { products } = useLoaderData();
    // console.log(products);
    return (
        <div className='container mx-auto mt-6'>
            <h2 className='my-5 text-3xl uppercase '>this is home product</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

const Product = ({ product }) => {
    const { images, description, brand, id } = product;
    const navigate = useNavigate()
    const hadleDetailes = () => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='shadow-md border-2 p-3 text-center flex flex-col'>
            <h3 className='text-lg font-bold border-b-4 pb-3 my-4'>{brand}</h3>
            <img className='h-32 mx-auto' src={images[0]} alt="product images" />
            <p className='my-3 flex-grow'>{description}</p>
            <button onClick={hadleDetailes} className='bg-green-600 text-white font-bold py-2 hover:bg-green-700'>Details</button>
        </div>

    )
}
export default HomeProduct;