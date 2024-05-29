package com.BackendServices.Employee.Services;

import com.BackendServices.Employee.Model.Employee;

import java.util.List;


public interface EmployeeService {

    Employee CreateEmployee(Employee employee);

    List<Employee> getEmployee();

    void deleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);

    Employee getEmployeeById(Long id);
}
