import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import employeeService from '../Services/employeeService';

const EmployeeList = () => {

    const[loading, setLoading] = useState(true);
    const[employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await employeeService.getEmployee();
                setEmployees(response.data);
                
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }  
    , []);

    const deleteEmployee = async (id) => {
        try {
            await employeeService.deleteEmployee(id);
            setEmployees(employees.filter((employee) => employee.id !== id));
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="flex justify-center mt-5">
          <div className="w-full max-w-6xl p-6 m-4 bg-white rounded shadow">
            <table className="min-w-full">
                <thead className='bg-gray-50'>
                    <tr>
                        <th className="border py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                        <th className="border py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                        <th className="border py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Email Id</th>
                        <th className="border py-3 px-6 text-center font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        
                    </tr>
                </thead>
            {!loading && (
                <tbody className='bg-white'>
                    {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-700'>{employee.firstname}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap' ><div className='text-sm text-gray-700'>{employee.lastname}</div></td>
                        <td className='text-left px-6 py-4 whitespace-nowrap' ><div className='text-sm text-gray-700'>{employee.email}</div></td>
                        <td className='text-center px-6 py-4 whitespace-nowrap' >
                                   <Link to = {`/Update/${employee.id}`}>
                                <button className='ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>UPDATE</button>
                       
                                </Link>
                                 <button onClick={() => deleteEmployee(employee.id)} className='ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>DELETE</button>
                        
                        </td>
                    </tr>
                    ))}

                </tbody>
            )}

            </table>
          </div>
        </div>
      );
}

export default EmployeeList
