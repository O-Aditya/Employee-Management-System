import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return <nav className='bg-gray-800 h-16 px-8 flex items-center justify-between'>
    <div className=''>
        <p className='text-white font-bold'>EMPLOYEE MANAGEMENT</p>
    </div>
    <div>
    <Link to="/">
             <button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Home</button>
      </Link>
      <Link to="/add">
             <button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Employee</button>
      </Link>
      
    </div>
  </nav>
   
}

export default Navbar
