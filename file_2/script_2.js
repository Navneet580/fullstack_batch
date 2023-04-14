
const todoContainer = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// *************1
// const handleAdd = (e)=> {
//     console.log('adding item')
//     console.log(input.value)
// }
// const todos = []
// button.addEventListener('click',handleAdd)

// ************2
// const handleAdd = (e)=> {
//     const itemToAdd = input.value
//     if (itemToAdd!==null && itemToAdd!=='') {
//         todos.push({
//             text: itemToAdd,
//             completed: false,
//             id: Date.now()
//         })
//         console.log(todos)
//         return
//     } else {
//         return window.alert('Adding an empty item is not possible.')
//     }
// }
// const todos = []
// button.addEventListener('click',handleAdd)



// ********************************************
const todos = []

// const renderList = () => {
//     todoContainer.innerHTML = ''
//     todos.forEach((todo)=>{
//         const li = document.createElement('li')
//         const button = document.createElement('button')
//         button.innerHTML = 'delete'
//         li.innerHTML = todo.text
//         todoContainer.appendChild(li)
//     })
// }


const renderList = ()=>{
    todoContainer.innerHTML = ''
    todos.forEach((todo)=>{
        const li = document.createElement('li')
        const button = document.createElement('button')
        button.addEventListener('click',(e)=>{
            li.remove()
            
            // const id = todo.id
            // todos.splice(todos.findIndex((todo)=> todo.id===id),1)

        })

        button.innerHTML = 'delete'
        li.innerHTML = `
        ${todo.text} 
        `
        li.appendChild(button)
        todoContainer.appendChild(li)
    })

}


const handleAdd = (e)=>{
    const itemToAdd = input.value
    if(itemToAdd!==null && itemToAdd!==''){
        todos.push({
            text: itemToAdd,
            completed: false,
            id: Date.now()
        })
    // console.log(todos)
    renderList()
        return 
    }else{
       return window.alert('adding an empty item is not possible')
    }
}

button.addEventListener('click',handleAdd)
