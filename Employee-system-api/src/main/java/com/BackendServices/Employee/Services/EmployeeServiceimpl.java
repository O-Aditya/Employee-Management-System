package com.BackendServices.Employee.Services;

import com.BackendServices.Employee.Entity.EmployeeEntity;
import com.BackendServices.Employee.Model.Employee;
import com.BackendServices.Employee.Repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceimpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    public EmployeeServiceimpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee CreateEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getEmployee() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employee> employees = employeeEntities.stream().map(employeeEntity -> {
            Employee employee = new Employee();
            BeanUtils.copyProperties(employeeEntity, employee);

            return employee;
        }).collect(Collectors.toList());

        return employees;
    }

    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElse(null);
        if (employeeEntity != null) {
            BeanUtils.copyProperties(employee, employeeEntity);
            employeeRepository.save(employeeEntity);

        }
        return employee;
       // return null;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id).orElse(null);
        Employee employee = null;
        if (employeeEntity != null) {
            employee = new Employee();
            BeanUtils.copyProperties(employeeEntity, employee);
            return employee;
        }
        return employee;
    }
}
