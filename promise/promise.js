class Promise{
    constructor(executor){
        executor();
    }
}

module.exports = Promise;