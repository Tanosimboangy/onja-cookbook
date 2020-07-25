const recipeName = document.querySelector('#recipe-name');
const recipeImage = document.querySelector('#recipe-photo');
const cookName = document.querySelector('#cook-name');
const recipeLevel = document.querySelector('.select-level');
const recipeDuration = document.querySelector('.select-time');
const recipeIngredients = document.querySelector('#input-ingredients');
const recipeSteps = document.querySelector('#steps');
const addingStepsButton = document.querySelector('.add');
const newIngredient = document.querySelector('#new-ingredient');
const newInput = document.querySelector('.new-input');
const newStep = document.querySelector('.new-step');
const submitButton = document.querySelector('#submit-button');

// ********* // *********** //
// Adding new list for the ingredients list
const handleClick = event => {
    console.log(event);
    const myHTML = `
    <input type="text" id="new-input-ingredients" placeholder="Ingredients for the recipe" required ><br>
    `;
    newInput.innerHTML += myHTML;
} 
newIngredient.addEventListener('click', handleClick);

// ********** // ********* //
// Adding new lists for the steps
const handleButtonClick = event => {
    console.log(event);
    const mySecHTML = `
    <input type="text" id="new-input-step" placeholder="Put the steps to prepare this recipe" required ><br>
    `;
    newStep.innerHTML += mySecHTML;
}

addingStepsButton.addEventListener('click', handleButtonClick);

// ********** // *********** //
// Manupilating the submit button
const handleSubmitButton = (event) => {
    console.log(event);
}
submitButton.addEventListener('click', handleSubmitButton);