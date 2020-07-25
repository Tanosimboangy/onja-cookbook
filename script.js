const recipeName = document.querySelector('#recipe-name');
const recipeImage = document.querySelector('#recipe-photo');
const cookName = document.querySelector('#cook-name');
const recipeLevel = document.querySelector('.select-level');
const recipeDuration = document.querySelector('.select-time');
const recipeIngredients = document.querySelector('#input-ingredients');
const recipeSteps = document.querySelector('#steps');
const addingStepsButton = document.querySelector('.add');
const newIngredient = document.querySelector('#new-ingredient');
const submitButton = document.querySelector('#submit-button');

const handleClick = event => {
    console.log(event);
} 

newIngredient.addEventListener('click', handleClick);