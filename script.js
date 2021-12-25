// Project 10
// Module 4: JavaScript Projects
// Project 10: Create a Recipe App by integrating the "TheMealDB"
// API 's random recipe endpoint.

// Requirements:
//     -Create a Github repository
// for this project. -
//     When the page first loads, it should display a random recipe, complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients. -
//     When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.

// Summary
// Creating variable called randomMeal. This variable is selecting button tag with the id of ramdom-meal
// Create window.addEventListener w/ load & getRandomMeal as parameters. This will allow the page to load 
//anything inside the   getRandomMeal fucntion.
// Create an async function to getRandomMeal data fromm Api link
// Create fuunction to display your page (displayRandomMeal)


const randomMeal = document.getElementById("random-meal"); //selecting the input button from the dom. With the id of random-meal 

// displaying the random meal
window.addEventListener("load", getRandomMeal); //When the window loads the get getRandomMeal fucntion will run & display the meal

//} // async fucntions allows you to download the data asynchronously (while other javascript is running

async function getRandomMeal() { // Async is receiving data for the randomMeal Api link
  const response = await fetch( // Our response variable is going to store the recieved data from the Api call
    // await fetch is return (fetching) the promise the object(which is the data in the link)
    "https://www.themealdb.com/api/json/v1/1/random.php" // This is the api food recipe link(all recipes, images etc)
  ); //await means to wait till we recieve the data. It returns the promise. Promise is the object of the data
  const resData = await response.json(); // convert to a json file from promise object(data)
  

  const randomMeal = resData.meals[0]; // seperating the meals from the array of data. We are only getting one meal object from the [0] index
  
  displayRandomMeal(randomMeal); //once we recieve all the data we pass to the displayRandomMeal fuction 
}

function displayRandomMeal(randomMeal) { 
  //Creating the element(div) & html template to display the data from randomMeal. Lastly adding the html template to display meal div.
  const displayMeal = document.getElementById("display-meal");
  const menuCard = document.createElement("div");
  menuCard.classList.add("meal");
  menuCard.innerHTML = `
    <div class="card">
     <h2 class="random">Recipe</h2>
<div class="food-image">
    <img src="${randomMeal.strMealThumb}" alt="${randomMeal.strMeal}" /> 
</div>
<div class='left'>
    <h3 class='center'>${randomMeal.strMeal}</h3>
   
    <h3>How to make ${randomMeal.strMeal} </h3> 
<p>${randomMeal.strInstructions}</p>
</div>
 <a href="${
   randomMeal.strYoutube
 }"><button class="randombtn btn">You Tube</button></a>
    </div> 
`;
  // h3 is name of randomMeal. P is randomMeal instructions details

  displayMeal.appendChild(menuCard); // adding the menu card to the displayMeal div
}

randomMeal.addEventListener("click", displayMeal); //add this to button to display
//random meal

function displayMeal() {
  //run function to display new meal
  document.getElementById("display-meal").innerHTML = ""; //empty out the display div so that it is clear & new randomMeal can be displayed
  getRandomMeal(); //excute get random meal again 
}
