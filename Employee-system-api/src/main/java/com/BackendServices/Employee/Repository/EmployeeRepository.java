package com.BackendServices.Employee.Repository;

import com.BackendServices.Employee.Entity.EmployeeEntity;
import com.BackendServices.Employee.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {


}
