import Result from "./result.js";

export default class DataResult extends Result {
    constructor(success, message, data){
        super(success, message)
        this.message = message;
        this.data = data;
    }
}