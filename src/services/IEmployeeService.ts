import { CreateEmployeeRequest } from "../models/requests/v1/createEmployeeRequest";
import { CreateEmployeeResponse } from "../models/responses/v1/createEmployeeResponse";
import { GetEmployeeByIDResponse } from "../models/responses/v1/getEmployeeByIDResponse";
import { GetEmployeesResponse } from "../models/responses/v1/getEmployeesResponse";
import { EmployeeEntity } from "../repository/models";

export interface IEmployeeService {

    createEmployee(employee: CreateEmployeeRequest): CreateEmployeeResponse

    getEmployees(offset: number, pageSize: number): GetEmployeesResponse

    getEmployeeByID(id: number): GetEmployeeByIDResponse
    
}