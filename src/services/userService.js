import {users} from "../data/users.js"
import DataError from "../models/dataError.js"
import CustomerService from "./customerService.js";
import EmployeeService from "./employeeService.js";

export default class UserService {

    constructor(loggerService) {
        this.loggerService = loggerService
        this.customerService = new CustomerService(this)
        this.employeeService = new EmployeeService(this)
        this.errors = []
    }

    load() {
        for (const user of users) {
            this.addUser(user)
        }
    }

    addUser(user) {
        if (!user["type"]) {
            this.errors.push(
                new DataError("This user can not be added. Object doesn't have type field", user))
            return;
        }
        switch (user.type) {
            case "customer":
                this.customerService.load(user)
                break
            case "employee":
                this.employeeService.load(user)
                break
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customerService.customers
    }

    listEmployee() {
        return this.employeeService.employees
    }

    getCustomerById(id) {
        return this.customerService.getById(id)
    }

    getEmployeeById(id) {
        return this.customerService.getById(id)
    }

    getCustomersSorted(){
        return this.customerService.getSorted()
    }

    getEmployeesSorted(){
        return this.employeeService.getSorted()
    }

    getEmployees() {
        return this.employeeService.employees;
    }

    getCustomers() {
        return this.customerService.customers;
    }
}