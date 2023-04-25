// const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=2ae3b234&app_key=0827e6fdd38f5011b9e9215e6b386a05`
//**************************************************** */



const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');


const searchForRecipe = async()=>{
  try {
    ul.innerHTML=""
    const searchString = input.value;
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=2ae3b234&app_key=0827e6fdd38f5011b9e9215e6b386a05`
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    const recipes = data.hits;
    console.log(recipes);
    recipes.forEach(obj=>{
      const {recipe} = obj
      console.log(recipe);
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = recipe.image;
      li.innerHTML = recipe.label
      li.appendChild(img)
      ul.appendChild(li)
    })

  } catch (error) {
    
  }
}

button.addEventListener('click', searchForRecipe)