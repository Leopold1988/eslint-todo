let Promise = require('./promise');

let p = new Promise((resolve)=>{
    resolve('aa');
});

p.then((data)=>{
    console.log('success', data);
},(err)=>{
    console.log('fail1', err);
});