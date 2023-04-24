// setTimeout(()=>{
//     console.log('executing')
// },5000)

// *******************
// for (let i=0; i<100; i++) {
//     console.log('ones')
// }

// for (let i=0; i<100; i++) {
//     console.log('two')
// }

// for (let i=0; i<100; i++) {
//     console.log('three')
// }

// *******************
// console.log('one')
// for (let i= 0; i<1000; i++) {
//     console.log('loop')
// }
// console.log('three')

// *******************

// console.log('one')

// setTimeout(()=>{
//     console.log('three')
// },4000)

// console.log('two')

// *******************

// console.log('one')

// for (let i=0; i<1000; i++) {
//     if(i===9999) console.log('three')
//     else console.log('')
// }

// console.log('two')

// *******************
// set Timeout function is not the function of javaScript 

// setTimeout(()=>{
//     console.log('three')
// },0)

// console.log('one')

// setTimeout(()=>{
//     console.log('four')
// },0)

// console.log('two')

// for (let i=0; i<1000; i++) {
//     console.log('loop')
// }

// *******************

// console.log('one')

// setTimeout(()=>{
//     console.log('three')
// },10000)

// console.log('two')


// ****************

// console.log(setTimeout)
// console.log(()=>{})

// ****************

// setInterval(()=>{
//     console.log('interval')
// },1000)




// ****************

let i = 0;

const id = setInterval(()=>{
    console.log('interval')
    if (++i===10) {
        clearInterval(id)
    }
},1000)

// ****************

// Permission - topic left only

// ****************