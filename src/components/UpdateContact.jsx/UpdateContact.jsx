import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateContact = () => {
    const theContact = useLoaderData();
    const {_id, name, phone, email} = theContact;
    console.log(name)
    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const contact = {name, email, phone};
        fetch(`https://contact-management-server-phi.vercel.app/contacts/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire(
                    'Contact is updated successfully!',
                  )
                form.reset()
            }
        })
    }
    return (
        <div className='bg-slate-50 pb-20'>
        <button className='bg-[#a053a0] p-3 m-10 px-10 text-white font-semibold rounded-xl'><Link to='/'>Back to Home</Link></button>
        <h1 className='text-[#a053a0] text-3xl font-semibold text-center pb-10'>Update the Contact {name}</h1>
        <form onSubmit={handleUpdate} className='w-4/12 p-10 bg-[#a053a0] rounded-xl mx-auto' action="">
            <p className='text-white text-xl font-semibold my-3'>Name</p>
            <input type="text" name="name" className='border-2 w-full p-3 rounded-xl mb-5' required placeholder='Your Name' defaultValue={name} />
            <p className='text-white text-xl font-semibold my-3'>Phone Number</p>
            <input type="text" name="phone" className='border-2 w-full p-3 rounded-xl mb-5' placeholder='Phone Number' defaultValue={phone} />
            <p className='text-white text-xl font-semibold my-3'>Email</p>
            <input type="email" name="email" className='border-2 w-full p-3 rounded-xl mb-5' required placeholder='Your Email' defaultValue={email}/>
            <div className='text-center'>
            <button className='p-3 px-10 bg-white rounded-full text-[#a053a0] text-xl font-semibold my-5 hover:bg-gray-100'>Update</button>

            </div>

        </form>
    </div>
    );
};

export default UpdateContact;