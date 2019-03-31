const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Apan',
    //   age: 27
    // })
    reject('Something went wrong!')
  }, 3500)
})

console.log('before')

promise
  .then(data => {
    console.log('1', data)
  })
  .catch(error => {
    console.log('error:', error)
  })

console.log('after')
