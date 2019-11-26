const Promise = require('./promise')
const p = new Promise((resolve, reject) => {
  resolve('aaa');
})

p.then((data) => {
  console.log('success', data)
}, (err) => {
  console.log('fail1', err)
})
