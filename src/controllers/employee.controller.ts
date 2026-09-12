import { Request, Response } from "express";
import { Employee } from "../models/employee";
import { calculateFinalSalary } from "../services/salaryCalculatorService";

export const createEmployee = async (req:Request, res:Response) => {
    try {
        const { name, position, baseSalary, yearsOfService } = req.body

        const finalSalary = calculateFinalSalary(baseSalary, yearsOfService)

        const employee = await Employee.create({
            name,
            position, 
            baseSalary,
            yearsOfService,
            finalSalary,
        })

        console.log(`Empleado creado: ${employee.name} - salario final: ${employee.finalSalary}`)
        return res.status(201).json(employee)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor"})
    }
}

export const getEmployees = async (_req:Request, res: Response) => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 })
        return res.json(employees)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor" })
    }
}

export const getEmployeesByID = async (req: Request, res: Response) => {
    try {
        const employee = await Employee.findById(req.params.id)
        return res.json(employee)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error interno del servidor" })
    }
}


