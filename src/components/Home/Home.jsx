import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import Swal from 'sweetalert2';


const Home = () => {
    // const contactData = useLoaderData();
    const [contacts, setContacts] = useState([...useLoaderData()])
    
    console.log(contacts);
    const handleContactDelete = _id =>{
        fetch(`https://contact-management-server-phi.vercel.app/contacts/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                Swal.fire(
                    'You Deleted the contact!',
                  )
                const remaining = contacts.filter(contact => contact._id !==_id)
                setContacts(remaining)
            }
        })
    }
    return (
        <div className='bg-slate-50 pb-40'>
            <div className='text-center pt-20'>
            <button className='bg-[#a053a0] p-3 px-10 text-white font-semibold rounded-xl'><Link to='/add'>Add Contact</Link></button>
            </div>
            <div className="overflow-x-auto w-full px-20 pt-10">
                <table className=" my-5 w-full">
                    <thead className='bg-[#a053a0] text-white'>
                        <tr >
                            <th className='py-5'>Contact</th>
                            <th className='py-5'>CTA</th>
                            <th className='py-5'>Mobile</th>
                            <th className='py-5'>Email</th>
                            <th className='py-5'>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(contact => <TableRow key={contact._id} contact={contact} handleContactDelete={handleContactDelete}></TableRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Home;