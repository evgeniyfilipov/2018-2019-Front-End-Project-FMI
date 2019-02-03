'use strict';

let restData = [];
let localData = [];

function fetchData() {
    const URL = 'https://api.myjson.com/bins/1dipcs';
    fetch(URL).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {        
        restData = json;
        console.log(restData);
    });
}

export {fetchData};

function add(recipe) {
    if (validate()) {
        localData.unshift(recipe);
        window.location.replace('file:///D:/FMI/Front%20End/finalproject/2018-2019-Front-End-Project-FMI/recipes.html');
    }
}

function validate() {
    if (document.publishRecipeForm.dish.value === '') {
        alert('Please provide a name for your dish!');
        return false;
    }

    if (document.publishRecipeForm.cook.value === '') {
        alert('Please provide your name!');
        return false;
    }

    if (document.publishRecipeForm.ingredients.value === '') {
        alert('Please provide the ingredients needed for this recipe!');
        return false;
    }

    if (document.publishRecipeForm.instructions.value === '') {
        alert('Please provide the instructions for this recipe!');
        return false;
    }

    return true;
}
