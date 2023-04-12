        //   ES6
// const greet = () => 'Radhe Krishna Ji'
// const name = 'me'
// const age = 22
// console.log(name + ' is ' + age + ' years old')
// const result = `${name} is ${age} years old   ${greet()}`
// console.log(result)

// const abc = `${greet()}`
// console.log(abc)

        // **************
// const a = [1,2,3,4]
// const m = [...a]
// console.log(m)

// const b = [5,6,7,8]

// const c = [...a,...b]
// const c = [...a,b]
// console.log(c)

        // ************** nested spreading

// const a = {
//     name: 'John',
//     age: 30,
//     car:{
//         brand: 'BMW',
//         model: 'X5'
//     }
// }

// const b ={
//     ...a,
// }

// a.name = 'Jack'
// a.age = 18
// a.car.brand = 'Mercedes'
// a.car.model = 'C300D'

// console.log(b)       



    // **************

// const a = {
//     name: 'John',
//     age: 30,
//     car:{
//         brand: 'BMW',
//         model: 'X5'
//     }
// }

// for (let key in a) {
//     console.log(key, a[key])
// }

// Object.keys(a).forEach(key => {
//     console.log(key)
// })



    // **************

// const a = {
//     name: 'John',
//     age: 30,
//     car:{
//         brand: 'BMW',
//         model: 'X5'
//     }
// }

// const name = a['name']
// const age = a.age
// const car = a.car

// const {name,age,car} = a
// console.log(name,age,car)


    // ****************

// const arr = ['Ram', 'Shyam', 'Krisna']
// const [name1,name2, name3] = arr
// console.log(name1,name2,name3)


    // **************

// const greet = (name, age, time)=>{
//     console.log(`Hello ${name} you are ${age} years old and it is ${time} o'clock`)
// }    

// const greet = (...rest)=>{
//     console.log(rest)
// }       

// greet('John', 30, 12)        
        
    // ********************

// const greet = (...params)=>{
//     console.log(params)
// }



// const [name1,...rest] = ['Radha', 'Sita', 'Rukmini']
// console.log(name1)
// console.log(rest) 

    // ********************    
        
const age = 19
const res = age > 18 ? 'adult' : 'child'
console.log(res)