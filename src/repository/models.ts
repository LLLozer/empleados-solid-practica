export class EmployeeEntity {

    id: number

    constructor(
    public name: string,
    public position: string,
    public baseSalary: number,
    public yearsOfService: number) {}

}