package com.BackendServices.Employee.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Employee {

    private long Id;
    private String firstname;
    private String lastname;
    private String email;
}
