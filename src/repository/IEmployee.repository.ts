import { Employee } from "./models"

export interface IEmployeeRepository {

    create(employee: Employee): Employee 

    get(offset: number, pageSize: number): Employee[]

    getById(id: number): Employee

}