let Promise = require('./promise');

let p = new Promise((resolve, reject)=>{
    resolve('aa');
});

p.then((data)=>{
    console.log('success1', data);
},(err)=>{
    console.log('fail1', err);
});