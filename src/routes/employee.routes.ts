import { Router } from "express";
import { createEmployee, getEmployees, getEmployeesByID } from "../controllers/employee.controller";

export const employeeRoutes = Router()

employeeRoutes.post("/employees", createEmployee)
employeeRoutes.get("/employees", getEmployees)
employeeRoutes.get("/employees/:id", getEmployeesByID)

