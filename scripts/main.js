'use strict';

function addShadow(object) {
    object.setAttribute('style', `box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: box-shadow 0.3s ease-in-out;`)
}

function removeShadow(object) {
    object.setAttribute('style', `box-shadow: none; transition: box-shadow 0.3s ease-in-out;`)
}