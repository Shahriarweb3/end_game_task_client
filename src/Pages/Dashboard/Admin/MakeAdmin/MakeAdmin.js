import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const admin = { email };
        fetch('https://murmuring-brushlands-95266.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()

    };

    return (
        <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center">
            <div className="bg-white w-full py-10 px-2 md:px-10 md:w-3/4 lg:w-1/2 mx-auto rounded-lg overflow-hidden">
                <h1 className="text-textPrimary text-center text-4xl font-medium mb-5">
                    Make an User Admin
                </h1>
                <form onSubmit={handleMakeAdmin} className="w-full mt-10 lg:mt-0 flex justify-start items-start" >
                    <div className='flex flex-col w-full'>
                        <input
                            className='w-full my-1 py-2 px-2 bg-gray-100 rounded-md border border-borderPrimary'
                            onBlur={handleOnBlur}
                            placeholder='Email'
                        />

                        <input className='cursor-pointer w-full mt-6 bg-bgPrimary text-white py-3 rounded-md' type="submit" />
                    </div>

                </form>
                {success && <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p class="font-bold">Be Warned</p>
                    <p>Something not ideal might be happening.</p>
                </div>}
            </div>
        </div>
    );
};

export default MakeAdmin;