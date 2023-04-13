
// ******************
// const headingObject = document.getElementById('heading')

// headingObject.innerHTML = 'Hello World'
// console.log(headingObject)

// headingObject.style.color = 'red'
// headingObject.style = 'color:orange'

// ******************

// setInterval(() => {
//     headingObject.innerHTML = new Date().toLocaleTimeString()
// },1000)


// ******************

// const listObject = document.getElementById('list')

// const arr  = ['element1','element2','element3','element4','element5']
// const textNode = document.createTextNode('Hello World')

// listObject.innerHTML=''
// arr.forEach((element) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(element)
//     li.innerHTML = element
//     listObject.appendChild(li)
// })


// ******************

// const listElement = document.getElementsByClassName('list-ele')

// console.log(listObject)
// console.log(listElement)            // shows array of element

// console.log([1,2,3,4])
// listElement.forEach(ele=>{
//     console.log(ele)
// })


// ******************

// const heading = document.querySelectorAll('ul')
// console.log(heading)


// ******************

const body = document.querySelector('body')
const toggleTheme = () => {

    // console.log(body.classList)

    // if (body.classList.contains('dark')) {
    //     body.classList.remove('dark')
    //     body.classList.add('light')
    // }else {
    //     body.classList.remove('light')
    //     body.classList.add('dark')
    // }

    body.classList.toggle('dark')

    // console.log(body.classList)
    // console.log('toggling theme')
}