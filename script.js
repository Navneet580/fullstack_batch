
// ************

// const getProducts1 = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             const products = [
//                 {name: 'Apple', price: 100},
//                 {name: 'Orange', price: 200},
//                 {name: 'Banana', price: 300},
//                 {name: 'Grapes', price: 400},
//                 {name: 'Pineapple', price: 500},
//                 {name: 'Mango', price: 600},
//                 {name: 'Strawberry', price: 700},
//                 {name: 'Watermelon', price: 800},
//                 {name: 'Peach', price: 900},
//                 {name: 'Cherry', price: 1000},
//             ]
//             resolve(products)
//         },3000)
//     })
// }

// const syncFunction = () => {
//     for (let i= 0; i<1000; i++){
//         console.log('loop')
//     }
// }

// ****1
// getProducts1().then (data=>console.log(data))
// syncFunction()

// console.log('hello')
// console.log('hello')
// console.log('hello')

// console.log(18+12)

// ********2

// const result = getProducts1()
// result.then(phone=>{
//     console.log(phone)
// })

// console.log(result)



// *****************************************

// const age = 11

// const myPromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(age>18)resolve('You are eligible to vote')
//     else reject('You are not eligible to vote')
//   },5000)
// })

// console.log(myPromise)

// ********1
// myPromise
// .then(result=>{
//   console.log(result)
// })
// .catch(error=>{
//   console.log(error)
// })


// *****************************************
   
// const response = fetch('https://jsonplaceholder.typicode.com/todos')
// console.log(response)

// ********1
// response.then(data=>{
//   console.log(data)
//   console.log(data.json())

//   const streamData = data.json()
//   streamData.then(finalData=>{console.log(finalData)})

//   structuredClone.then(finalData=>{console.log(finalData)})
  
// })


// *****************************************

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>{
//   return data.json()
// })
// .then(finalData=>{
//   console.log(finalData)
// })

// *****************************************

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json())
// .then(finalData=>{
//   console.log(finalData)
// })
// .catch(err=>{
//   console.log(err)
// })

// *****************************************

fetch('https://jsonplaceholder.typicode.com/todos')
.then(data=>data.json())
.then(result =>{
  console.log(result)
})