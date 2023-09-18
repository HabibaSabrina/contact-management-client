import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddContact = () => {
    const handleAddContact = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const contact = {name, email, phone}
        console.log(contact);
        fetch('https://contact-management-server-phi.vercel.app/contacts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'Contact is added successfully!',
                  )
                form.reset();
            }
        })
    }
    return (
        <div className='bg-slate-50 pb-20'>
            <button className='bg-[#a053a0] p-3 m-10 px-10 text-white font-semibold rounded-xl'><Link to='/'>Back to Home</Link></button>
            <h1 className='text-[#a053a0] text-3xl font-semibold text-center pb-10'>Add a Contact</h1>
            <form onSubmit={handleAddContact} className='w-4/12 p-10 bg-[#a053a0] rounded-xl mx-auto' action="">
                <p className='text-white text-xl font-semibold my-3'>Name</p>
                <input type="text" name="name" className='border-2 w-full p-3 rounded-xl mb-5' required placeholder='Your Name' />
                <p className='text-white text-xl font-semibold my-3'>Phone Number</p>
                <input type="text" name="phone" className='border-2 w-full p-3 rounded-xl mb-5' placeholder='Phone Number' />
                <p className='text-white text-xl font-semibold my-3'>Email</p>
                <input type="email" name="email" className='border-2 w-full p-3 rounded-xl mb-5' required placeholder='Your Email' />
                <div className='text-center'>
                <button className='p-3 px-10 bg-white rounded-full text-[#a053a0] text-xl font-semibold my-5 hover:bg-gray-100'>Add Contact</button>

                </div>

            </form>
        </div>
    );
};

export default AddContact;