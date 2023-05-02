// const generateEndpoint = (searchString='')=> `https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=2ae3b234&app_key=0827e6fdd38f5011b9e9215e6b386a05`

// console.log(generateEndpoint('pizza'))
//****************************************************
 

const app_id = '2ae3b234'
const app_key = '0827e6fdd38f5011b9e9215e6b386a05'
const loaderContainer = document.querySelector('.loader-container')
const input = document.querySelector('input')
const button = document.querySelector('button')
const recipesContainer = document.querySelector('.results')

const showLoader = () => {
    loaderContainer.style = "display: flex"
}

const hideLoader = () => {
    loaderContainer.style = "display: none"
}


const generateCard = (image,title) => `<div style="width:300px" class=' bg-white rounded-3xl shadow-xl overflow-hidden'>
<div class='max-w-md mx-auto'>

    <div style="height: 200px; background-image:url('${image}');
    background-position:center;
    background-size:cover
    " class="bg-red-100 w-full h-2/3">

    </div>
    <div class='p-4 sm:p-6'>
        <p class='font-bold text-gray-700 text-[18px] leading-7 mb-1'>${title}</p>
        <div class='flex flex-row'>
            <p class='text-[#3C3C4399] text-[12px] mr-2 line-through'>MVR 700</p>
            <p class='text-[12px] font-bold text-[#0FB478]'>MVR 700</p>
        </div>
        <p class='text-[#7C7C80] font-[15px] mt-2'>
            <ul>
                <li>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices</li>
                <li>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices</li>
            </ul>
        </p>


        <a target='_blank' href='foodiesapp://food/1001' class='block mt-4 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
            View on foodies
        </a>

    </div>
</div>
</div>

</div>`



const getRecipes = async (searchString) => {
    try {
        showLoader()
        const searchString = input.value;
        const response = await fetch (generateEndpoint(searchString))
        console.log(response)
        const data = await response.json()
        console.log(data)
        const recipes = data.hits
        
        recipesContainer.innerHTML=""
        recipes.forEach(recipe => {
            const {image,label} = recipe.recipe
            recipesContainer.innerHTML += generateCard(image,label)
        })
    return data    
    } catch (error) {
        console.log(error)
    } finally {
      hideLoader()
      input.value=""
    }
}

const generateEndpoint = (searchString='') => `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${app_id}&app_key=${app_key}`
// console.log(generateEndpoint('pizza'))

button.addEventListener('click', getRecipes)