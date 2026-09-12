import { EmployeeEntity } from "../repository/models";
import { CreateEmployeeRequest } from "../models/requests/v1/createEmployeeRequest";
import { CreateEmployeeResponse } from "../models/responses/v1/createEmployeeResponse";
import { GetEmployeeByIDResponse } from "../models/responses/v1/getEmployeeByIDResponse";
import { GetEmployeesResponse } from "../models/responses/v1/getEmployeesResponse";
import { IEmployeeRepository } from "../repository/IEmployee.repository";
import { IEmployeeService } from "./IEmployeeService";
import { Employee } from "../models/responses/v1/employee";
import { calculateFinalSalary } from "./salaryCalculatorService";

class EmployeeService implements IEmployeeService {

    constructor(private readonly employeeRepository: IEmployeeRepository) {}

    createEmployee(employee: CreateEmployeeRequest): CreateEmployeeResponse {
        const employeeObject = new EmployeeEntity(employee.name, employee.position, employee.baseSalary, employee.yearsOfService)
        const createdEmployee = this.employeeRepository.create(employeeObject)
        const finalSalary = calculateFinalSalary(createdEmployee.baseSalary, createdEmployee.yearsOfService)
        const response = new CreateEmployeeResponse(new Employee(
            createdEmployee.id, 
            createdEmployee.name, 
            createdEmployee.position, 
            createdEmployee.baseSalary, 
            createdEmployee.yearsOfService, 
            finalSalary
        ))
        return response
    }

    getEmployees(offset: number, pageSize: number): GetEmployeesResponse {
        
    }

    getEmployeeByID(id: number): GetEmployeeByIDResponse {
        
    }

}