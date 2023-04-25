// ***********
//  fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json())
// .then(result=>{
//   console.log(result)
// }).catch(error=>{
//   console.log(error)
// })


// **********
// const getTodos = async () => {
//     const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await result.json();    
//     console.log(data)        
//   }

// getTodos();

// **********
// const getTodos = async () => {
//     try {
//       const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await result.json();
                 
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')


// **********
// const getTodos = async () => {
//     try {
//         console.log(1)
//       const result = await fetch("https://jsonplaceholder.typicode.com/todos");
//       console.log(result)
//       console.log(2)
//       const data = await result.json();
//       console.log(data)
//       console.log(3)           
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')

//   ***************
// const getTodos = async () => {
//     try {
//       console.log(1)
//       const result = await new Promise(resolve=>{
//         setTimeout(()=>resolve(),5000)
//       });
//       console.log(2)

//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')

  
//   *************** it is waiting for some time

// const getTodos = async () => {
//     try {
//       console.log(1)

//       await new Promise(resolve=>{
//         setTimeout(()=>resolve(),4000)
//       });
//       console.log(2)

//       await new Promise(resolve=>{
//         setTimeout(()=>resolve(),6000)
//       });
//       console.log(3)

//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')
  
//   ***************it is taking 1s waiting only 

// const getTodos = async () => {
//     try {
//       console.log(1)

//       new Promise(resolve=>{
//         setTimeout(()=>resolve(),4000)
//       }).then(() => console.log(2))

//       new Promise(resolve=>{
//         setTimeout(()=>resolve(),5000)
//       }).then(() => console.log(3))
      
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')
  



//   *************** it is also waiting for some time

// const getTodos = async () => {
//     try {
//       console.log(1)

//       const p1 = new Promise(resolve=>{
//         setTimeout(()=>resolve(),4000)
//       });
//       await p1
//       console.log(2)

//       const p2 = new Promise(resolve=>{
//         setTimeout(()=>resolve(),6000)
//       });
//       await p2
//       console.log(3)

//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   getTodos();
//   console.log('hello')
  
//   *************** for parallel timing

const getTodos = async () => {
    try {
      console.log(1)

      const p1 = new Promise((resolve)=>{
        setTimeout(() => resolve(),4000)
      })
      
      const p2 = new Promise((resolve)=>{
        setTimeout(() => resolve(),5000)
      })
      
      const p3 = Promise.all([p1,p2])
      await p3
      console.log(p3)

    } catch (err) {
      console.log(err);
    }
  };
  
  getTodos();
  console.log('hello')

//   ***************