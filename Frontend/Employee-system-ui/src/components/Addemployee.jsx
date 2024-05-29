import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import employeeService from '../Services/employeeService';

const AddEmployee = () => {

  const navigate = useNavigate();

    const [employee, SetEmployee] = useState({
    id : '',
    firstname: '',
    lastname: '',
    email: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChanges = (e) => {
        const value = e.target.value;
        SetEmployee({
            ...employee,
            [e.target.name]: value
        });
    }

     const saveEmployee = (e) => {
      if (!employee.firstname || !employee.lastname || !employee.email) {
        alert('Please fill in all fields');
        return;
      }
      setIsLoading(true);
        e.preventDefault();
        employeeService.saveEmployee(employee)
        .then((res) => {
            console.log(res);
            navigate('/'); // redirect to home page
            setIsLoading(false);
            
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });

    }



 

  return (
    
  <div className='flex items-center justify-center mt-20'>
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto'>
      <h2 className='mb-4 text-2xl font-bold text-center'>Add New Employee</h2>
      <form>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'htmlFor='firstname'>First Name</label>
          <input 
          id='firstname'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type='text' 
            name = 'firstname'
            value={employee.firstname} 
            onChange={(e) => handleChanges(e)} 
            
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 'htmlFor='lastname'>Last Name</label>
          <input 
          id='lastname'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type='text'
            name = 'lastname'
            value={employee.lastname} 
            onChange={(e) => handleChanges(e)} 
            
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'htmlFor='email'>Email</label>
          <input 
          id='email'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
            type='email' 
            name = 'email'
            value={employee.email} 
            onChange={(e) => handleChanges(e)}
           
          />
        </div>
        <div className='flex items-center justify-between'>
          
          <button 
          onClick={saveEmployee}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
          >
            Save
          </button>
          
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
            
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default AddEmployee;