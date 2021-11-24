import DataResult from "./dataResult";

export default class SuccessDataResult extends DataResult {
    constructor(message, data){
        super(true, message, data)
    }
}