package com.BackendServices.Employee.Controller;

import com.BackendServices.Employee.Model.Employee;
import com.BackendServices.Employee.Services.EmployeeService;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping ("/api/v1/")
public class EmployeeController {

    @Autowired
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/addEmployee")
    public Employee CreateEmployee(@RequestBody Employee employee) {
        return employeeService.CreateEmployee(employee);

    }

    @GetMapping("/getEmployee")
    public List<Employee> getEmployee(){
        return employeeService.getEmployee();

    }

    @DeleteMapping("/deleteEmployee/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }


    @GetMapping("/getEmployee/{id}")
    public Employee getEmployeeById(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @PutMapping("/updateEmployee/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        return employeeService.updateEmployee(id, employee);
    }





}
