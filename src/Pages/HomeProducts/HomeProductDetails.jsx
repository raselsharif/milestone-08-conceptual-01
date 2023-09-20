import { useLoaderData, useNavigate } from "react-router-dom";

const HomeProductDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { images, brand, id, description, price, rating, stock, catagory, title } = details;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='shadow-md border-2 p-3 text-center flex flex-col container mx-auto max-w-3xl'>
            <h3 className='text-lg font-bold border-b-4 pb-3 my-4'>Brand: {brand}</h3>
            <div className="grid grid-cols-2">
                <div className="mb-4">
                    <p className="mb-3"><span className="font-bold">Model:</span>  {title}</p>
                    <img className='h-32 mx-auto' src={images[0]} alt="product images" />

                </div>
                <div className="flex flex-col">
                    <p className='my-3 flex-grow'><span className="font-bold">Details:</span>  {description}</p>
                    <div className="flex justify-between flex-grow">
                        <p>$ {price}</p>
                        <p>Rating: {rating}</p>
                        <p>Stock: {stock}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleBack} className='bg-green-600 text-white font-bold py-2 px-3 rounded-lg hover:bg-green-700'>Go Back</button>
            </div>
        </div>
    );
};

export default HomeProductDetails;