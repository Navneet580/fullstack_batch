
const body = document.querySelector('body')
const  button = document.querySelector('button')

// *********1
// const callback = (event)=>{
//     console.log(event)
// }
// button.addEventListener('click', callback)

// **********2
// body.addEventListener('keydown', (event)=>{
//     console.log(`Key pressed: ${event.key}`)
// })

// **********3
// body.addEventListener('click', (event)=>{
//      console.log(`You clicked on this position: ${event.clientX} ${event.clientY}`)

//      const ele = document.createElement('div')
//      ele.style = `
//      position: absolute;
//      top: ${event.clientY}px;
//      left: ${event.clientX}px;
//      width: 10px;
//      height: 10px;
//      background-color: #ffbf00;
//      border-radius: 50%;
//      `
     
//      body.appendChild(ele)
// })

// **********4
// body.addEventListener('mousemove', (event)=>{
//     console.log(`You clicked on this position: ${event.clientX} ${event.clientY}`)

//     const ele = document.createElement('div')
//     ele.style = `
//     position: absolute;
//     top: ${event.clientY}px;
//     left: ${event.clientX}px;
//     width: 10px;
//     height: 10px;
//     background-color: #ffbf00;
//     border-radius: 50%;
//     `
    
//     body.appendChild(ele)
// })

// ****************

document.addEventListener('scroll',(event)=>{
    if (window.scrollY > 400) {
        const ele = document.createElement('h1')
        ele.innerText = 'Hello World'
        body.appendChild(ele)
        ele.style = `
        transition: 1s ease; 
        position: absolute;
        top: 450px;
        left: 500px;
        `
    }
    // console.log(`You scroll on this position: ${event.clientX} ${event.clientY}`)
})


const content = document.querySelector('#content')
const progressBar = document.querySelector('progress')
// console.log(content.clientHeight)

const clientHeight = content.clientHeight
document.addEventListener('scroll', (event)=> {
    const scroll = window.scrollY
    const percentage = scroll / (clientHeight - window.innerHeight)
    console.log(percentage * 100)
    progressBar.value = (percentage * 100).toFixed(0)
})
