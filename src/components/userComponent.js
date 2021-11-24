import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)
userService.addUser(new User(1,"Engin","Demiroğ","Ankara"))
userService.addUser(new User(2,"Baran","Gökçekli","Muğla"))
userService.load()

console.log("--------------------------")

let lolCustomer = new Customer(1, "Seda", "Yılmaz", "Ankara", "fdgdfg");
lolCustomer.type = "customer"

userService.addUser(lolCustomer)
console.log(userService.getCustomers())
console.log(userService.getEmployees())
console.log(userService.errors)
console.log(userService.getCustomersSorted())