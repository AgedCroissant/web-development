const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alt = {
    'pic1.jpg' : 'Close up of human eye',
    'pic2.jpg' : 'Close up of a natural stone',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'Ancient Egyptian hieroglyphs',
    'pic5.jpg' : 'Moth on a leaf',
}

/* Looping through images */
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', image);
    thumbBar.appendChild(newImage);

    // click event for scrolling through images
    newImage.addEventListener('click', clickedImage => {
        displayedImage.src = clickedImage.target.src;
        displayedImage.alt = clickedImage.target.alt;
    })
}

/* Wiring up the Darken/Lighten button */

// variable to store value of darkMode 
let darkMode = true;

btn.addEventListener('click', () => {
    const btnInput = btn.getAttribute('class')
    if (btnInput === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0 0 0 / 50%)';
    }

    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0 0 0 / 0%)';
    }
})