export const calculateFinalSalary = (baseSalary: number, yearsOfService: number) => {
    const bonus = baseSalary * 0.02 * yearsOfService
    const finalSalary = baseSalary + bonus
    return finalSalary
}