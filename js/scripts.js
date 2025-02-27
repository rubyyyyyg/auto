import { reviews } from '../data/reviews.js';

const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

const myTarget = document.querySelector('#cards');

for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section')

    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myRating = document.createElement('div')

    for (let step = 0; step<reviews[x].rating; step++) {
       
        const starR = document.createElement('img')
        starR.setAttribute('alt', 'Image of stars')
        starR.src = "./svgCards/star.svg"
        myRating.appendChild(starR)
    }

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].comment

   


   

   
   


    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview);
    

    myTarget.appendChild(mySection);
}