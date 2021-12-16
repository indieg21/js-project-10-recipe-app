// Project 10
// Module 4: JavaScript Projects
// Project 10: Create a Recipe App by integrating the "TheMealDB"
// API 's random recipe endpoint.

// Requirements:
//     -Create a Github repository
// for this project. -
//     When the page first loads, it should display a random recipe, complete with a picture of the meal, name of the meal, a button to watch the YouTube video, and the instructions of how to make the meal, along with the list of ingredients. -
//     When a user clicks a button called "new recipe", it should show a new random and update the content on the page using JavaScript.

// Note: Use the "Support"
// at the top
// if you need help, as well as to send me the Github link to your solution when you finish.

const randomMeal = document.getElementById("random-meal"); //reading the div from the dom. With the id of random-meal id

getRandomMeal(); // displaying the random meal

//} // async fucntions allows you to download the data asynchronously (while other javascript is running

async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  ); //await means to wait till we recieve the data. It returns the promise
  //console.log (response)
  const resData = await response.json(); // convert to a json file which is the array

  const randomMeal = resData.meals[0]; // grab the meal part from the array

  console.log(randomMeal);

  displayRandomMeal(randomMeal, true); //once we recieve all the data we pass to the displayRandomMeal
}

function displayRandomMeal(randomMeal, random = false) {
  //recieveing the displayRandomMeal creating a true and false depending only on the data below
  const displayMeal = document.getElementById("display-meal");
  let menuCard = document.createElement("div");
  menuCard.classList.add("meal");
  menuCard.innerHTML = `
    <div class="card">
    ${random ? ` <h2 class="random">Recipe</h2>` : ""}
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
  document.getElementById("display-meal").innerHTML = "";
  getRandomMeal(); //excute get random meal again
}
