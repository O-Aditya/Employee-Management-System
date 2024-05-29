import React, { useEffect , useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom';

import employeeService from '../Services/employeeService';

const Updateemployee = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstname: '',
        lastname: '',
        email: ''
    });

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await employeeService.getEmployeeById(id);
                setEmployee(response.data);
                
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchEmployee();
    }, [id])

    const updateEmployee = async (event) => {
        event.preventDefault();
        try {
            await employeeService.updateEmployee(id, employee);
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
        
    };
        
    

    return (
    
        <div className='flex items-center justify-center mt-20'>
          <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto'>
            <h2 className='mb-4 text-2xl font-bold text-center'>Update Employee</h2>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'htmlFor='firstname'>First Name</label>
                <input 
                id='firstname'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  type='text' 
                  name = 'firstname'
                  value={employee.firstname}
                  onChange={handleInputChange}

                  
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
                  onChange={handleInputChange}
                  
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
                  onChange={handleInputChange}
                 
                />
              </div>
              <div className='flex items-center justify-between'>
                
                <button 
                type="submit"
                onClick={updateEmployee} 
                
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                >
                  Update
                </button>
                
                <button 
                type="button"
                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
                 onClick={() => navigate('/')} 
                >
                  Cancle
                </button>
              </div>
            </form>
          </div>
        </div>
      );








  
}

export default Updateemployee
