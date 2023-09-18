import React from 'react';
import { FaBeer, FaEdit, FaEnvelope, FaFacebookMessenger, FaPhoneAlt, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TableRow = ({ contact, handleContactDelete }) => {
    const {_id, name, email, phone } = contact
    console.log(name)
    
    return (
       
            <tr className=' border-b-2 border-x-2 border-[#a053a0] bg-slate-50'>
                <td className='px-2'>{name}</td>
                <td className='flex gap-3 p-5 justify-center'><FaPhoneAlt></FaPhoneAlt> <FaEnvelope></FaEnvelope> </td>
                <td className='text-center'>{phone}</td>
                <td className='text-center'>{email}</td>
                <td className='flex gap-3 justify-center'><Link to={`/updatecontact/${_id}`}><button><FaEdit></FaEdit></button></Link><button onClick={() => handleContactDelete(_id)}><FaRegTrashAlt></FaRegTrashAlt></button></td>
            </tr>
        
    );
};

export default TableRow;