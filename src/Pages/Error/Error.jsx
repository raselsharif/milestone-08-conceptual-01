import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error);
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='font-bold text-4xl text-red-600 mb-6'>Not found this page</h2>
            <h3 className='italic text-red-600 text-xl '>Error Code: {error.status}</h3>
            <h3 className='italic text-red-600 text-xl my-4'>{error.data}</h3>
            <div>
                <button onClick={handleBack} className='bg-green-600 text-white font-bold py-2 px-3 rounded-lg hover:bg-green-700'>Go Back</button>
            </div>
        </div>
    );
};

export default Error;