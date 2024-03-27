/*  Name: Jean Arouesty

    File: main.js

    Date: 27 March 2024

    This program will create a random story for the user. They will be given the option to use a custom name, otherwise the defualt name will be bob. They will also have the ability to use US or UK measurements */

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// this fuction takes an array and returns one of the items stored at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// arrays to store items used to randomize the story
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// adds click event listener to randomize variable so result() runs once clicked
randomize.addEventListener('click', result);