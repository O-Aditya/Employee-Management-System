import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/addEmployee";
const EMPLOYEE_API_BASE_URL1 = "http://localhost:8080/api/v1/getEmployee";
const EMPLOYEE_API_BASE_URL2 = "http://localhost:8080/api/v1/deleteEmployee";
const EMPLOYEE_API_BASE_URL3 = "http://localhost:8080/api/v1/getEmployee";
const EMPLOYEE_API_BASE_URL4 = "http://localhost:8080/api/v1/updateEmployee";
class employeeService{
    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL1);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL2 + '/' + employeeId);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL3 + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(`${EMPLOYEE_API_BASE_URL4}/${employeeId}`, employee);
    }



}

export default new employeeService();