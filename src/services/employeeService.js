import DataError from "../errors/dataError.js";

export default class EmployeeService {

    constructor(userService) {
        this.userService = userService
        this.employees = []
        this.requiredFields = ["id", "firstName", "lastName", "age", "city", "salary"]
    }

    isValidEmployee(user) {
        let isValid = true
        for (const field of this.requiredFields) {
            if (!user[field]) {
                isValid = false
                this.userService.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(user.age)) {
            isValid = false
            this.userService.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return isValid
    }

    load(employee) {
        if (this.isValidEmployee(employee)) {
            this.employees.push(employee)
        }
    }

    getSorted() {
        return this.employees.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1
            } else if(customer1.firstName === customer2.firstName) {
                return 0
            } else {
                return -1
            }
        })
    }
}