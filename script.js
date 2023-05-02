// localStorage.setItem('name', 'Tom');
// const obj = {
//     name: 'Tom',
//     age: 17,
//     waight: 52
// };

// console.log(JSON.stringify(obj));


// *****************
localStorage.setItem('name', 'Tom');
const obj = {
    name: 'Tom',
    age: 17,
};
const arr = ['Tom', 'Bob', 'Sam'];

// localStorage.setItem('nameArr', JSON.stringify(arr));
console.log(JSON.stringify(obj), JSON.stringify(arr));



// ***********************
const button =  document.querySelector('button');
const text =  document.querySelector('span');
const body = document.querySelector('body');

const initialise = ()=>{
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme==='dark'){
        body.classList.add('dark');
        text.innerHTML ='🌙';
    }else{
        text.innerHTML ='☀️';
    }
}
initialise()

const changeTheme = ()=>{
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    text.innerHTML = currentTheme==='dark'?'☀️':'🌙';
    body.classList.toggle('dark');
    localStorage.setItem('theme',currentTheme==='dark'?'light':'dark');
}

button.addEventListener('click',changeTheme)



// ************************ to find current status
// const data = localStorage.getItem('theme')
// console.log(data)
// localStorage.clear()



// **********************

// ***1 - to open navigator help
// console.log(navigator)

// ***1 - to open current location
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position)
// })


// ***2 - to open audio
// navigator.mediaDevices.getUserMedia({ audio: true }).then(stream=>{
//   console.log(stream)
// })


// ***3 - to open video
// navigator.mediaDevices.getUserMedia({ video: true }).then(stream=>{
//   console.log(stream)
// })



// ****************** prompt method
// const query = prompt('what is your name')
// console.log(query)


// ***** alert() method
// alert("This is an alert message box.");
// alert(Date());
// alert('This is a numer: ' + 100);



// ***** prompt() method
// const query = prompt('what is your name')
// console.log(query)


// ***** confirm() method
// confirm("Press a button!");
// confirm("Press a button!\nEither OK or Cancel.");