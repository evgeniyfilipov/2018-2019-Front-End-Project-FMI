'use strict';

let data = [];

function fetchData() {
    const URL = 'https://api.myjson.com/bins/nskb0';
    fetch(URL).then(response => {
        if (response.ok) {
            return response.json();
        }
    }).then(json => {
        data = json;
    });
}

function add(recipe) {
    data.unshift(recipe);
}