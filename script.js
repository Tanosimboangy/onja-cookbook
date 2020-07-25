const Form = document.getElementsByTagName('form');
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
    <input type="text" class="new-input-ingredient" id="input-ingredients" placeholder="Ingredients for the recipe" required ><br>
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


const getFormvalue = () => {
    const newIngredient = document.querySelector(".new-input-ingredient");
    for (var i = 0; i < newIngredient.length; i++) {
     if (newIngredient.elements[i].value!='Submit') {  
        console.log(newIngredient.elements[i].value);
       }
    }
}
// const getFormvalue = () => {
// var x = document.querySelector(">sixth");
// for (var i = 0; i < x.length; i++)
// {
//     if (x.elements[i].value!='Submit')
//     {  
//     console.log(x.elements[i].value);
//     }  
//     }
// }


// ********** // *********** //
// Manupilating the submit button
const handleSubmitButton = (event) => {
    event.preventDefault();
    console.log(recipes);
    Form.reset();
}
submitButton.addEventListener('click', handleSubmitButton);

var recipename =  recipeName.value;

const recipes = [{
    title: '${recipename}',
    picture: 'https://recipeImage.value',
    author: 'cookName.value',
    difficulty: 'recipeLevel.value',
    timing: 'recipeDuration.value',
    ingredients: ['eggs', 'salt', 'water'],
    steps: [
        'Put a pan on the fire',
        'Crack the eggs on it',
        'Wait, put them out',
        'Add some salt on it',
    ],
}];
