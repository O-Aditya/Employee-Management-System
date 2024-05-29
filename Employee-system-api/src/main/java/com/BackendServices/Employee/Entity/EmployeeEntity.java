package com.BackendServices.Employee.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data

@Table (name = "employee")
public class EmployeeEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long Id;

    private String firstname;
    private String lastname;
    private String email;



}

