/*  Name: Jean Arouesty

    File: main.js

    Date: 27 March 2024

    This program will create a random story for the user. They will be given the option to use a custom name, otherwise the defualt name will be bob. They will also have the ability to use US or UK measurements */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
