import DataError from "../models/dataError";

export default class CustomerService {

    constructor(userService) {
        this.userService = userService
        this.customers = []
    }

    load(customer) {
        if (this.isValidCustomer(customer)) {
            this.customers.push(customer)
        }
    }

    getById(id) {
        return this.customers.find( u=> u.id === id)
    }

    getSorted() {
        this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1
            } else if(customer1.firstName === customer2.firstName) {
                return 0
            } else {
                return -1
            }
        })
    }


    //formik-yup
    isValidCustomer(user) {
        let requiredFields = ["id", "firstName", "lastName", "age", "city"]
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.userService.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(user.age)) {
            hasErrors = true
            this.userService.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

}