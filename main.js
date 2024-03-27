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

function result(){
    // variable to create a new random story each time the button is pressed (use let so the value can be modified)
    let newStory = storyText;

    // new variables that will pick a random value from our arrays
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    // replacing string from storyText (newStory) and replaced by random string from the arrays
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    // if statment to change bob into user input, otherwise nothing happens
    if (customName.value !== ''){
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // if statament to change f to c and lbs to stone in the case the user picks uk
    if (document.getElementById("uk").checked){
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('300 pounds', weight)
        newStory = newStory.replaceAll('94 fahrenheit', temperature)  
    }

    // making the textContext property of the story and equal to newStory
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
