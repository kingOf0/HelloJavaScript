import {users} from "../data/users.js"
import DataError from "../errors/dataError.js"
import CustomerService from "./customerService.js";
import EmployeeService from "./employeeService.js";

export default class UserService {

    constructor(loggerService) {
        this.loggerService = loggerService
        this.errors = []
        this.customerService = new CustomerService(this)
        this.employeeService = new EmployeeService(this)
        this.serviceMap = new Map()
        this.serviceMap.set("customer", this.customerService)
        this.serviceMap.set("employee", this.employeeService)
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
        const service = this.serviceMap.get(user.type);
        if (!service) {
            this.errors.push(
                new DataError("This user can not be added. Wrong user type", user))
            return;
        }
        service.load(user)
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