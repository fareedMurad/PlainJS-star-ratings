// initial ratings

const ratings = {
    sony : 4.7,
    samsung : 3.4,
    vizio : 2.3,
    panasonic : 3.6,
    phillips : 4.1
}

// total stars

const  starsTotal = 5;

// Get ratings 
document.addEventListener('DomContentLoaded', getRatings());


// selecting Elements
const productSelect = document.querySelector('#product-selector');
const ratingControl = document.querySelector('#rating-control');

let product;

// change select element
productSelect.addEventListener('change', (e) =>{
    product = e.target.value;

    // enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});

//rating control change 
ratingControl.addEventListener('blur',(e) => {

    const rating = e.target.value;

    // rating should be 5 or under
    if(rating > starsTotal){
        alert('Please Rate 1 - 5');
    }

    // Change Rating 
    ratings[product] = rating;

    // update getRating() function
    getRatings();
})

// get ratings
function getRatings(){

    for(let rating in ratings){
        
        // Set percentage of color in stars
        const starPercentage = (ratings[rating] / starsTotal) * 100;

        // round up to nearest 10
        const starPercentageRound = `${(Math.round(starPercentage / 10) *10)}%`;
        console.log(starPercentageRound);

        // set width of stars inner
        document.querySelector(`.${rating} .inner-stars`).style.width = starPercentageRound;
       
        // set Number Rating
        document.querySelector(`.${rating} .number-ratings`).innerHTML = ratings[rating];

        // document.querySelector(`.${rating}.inner-stars`).addEventListener('click' , () =>{
        //     alert(``)
        // })

    }
}
// function check(){
// for(let rating in ratings){

//     document.querySelector(`.${rating}.inner-stars`).addEventListener('click' , () =>{
//         alert(`${getRatings()}`)
//     })
// }}
// check();
