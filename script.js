function Restaurant (name, rating, timesvisited, comments){ //add individual dishes
    this.name = name;
    this.rating = rating;
    this.timesvisited = timesvisited;
    this.comments = comments;
}

let restaurantList = [];

function addResToResList() { //taking input from form and adding to array
    const restaurant = new Restaurant(
        document.querySelector('#getname').value,
        document.querySelector('#rating').value,
        document.querySelector('#timesvisited').value,
        document.querySelector('#comments').value,
    )
    restaurantList.push(restaurant);
}


function displayRestaurant() { //displaying the array by resetting html and looping through everything again, might not be efficient
    const content = document.querySelector(".content");
    content.innerHTML = ``;
    restaurantList.forEach((res) => {
        content.innerHTML +=  `<div class = "restaurant"> <div class = "name"> ${res.name}</div> 
                        <div class = "rating"> My Rating: ${res.rating}/10 </div> 
                        <div class = "timesvisited">Times Visited: ${res.timesvisited}  </div> 
                        <div class = "comments">My Thoughts: ${res.comments}</div> </div>`;

    })
    
}



const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const form = document.querySelector(".add-restaurant");

function openForm() { // toggling active on the modal and overlay for form popup
    modal.classList.add('active');
    overlay.classList.add('active');
}
function closeForm() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

overlay.addEventListener('click', () => { //clicking background to close form
    closeForm();
})

form.addEventListener('submit', (e)=>{ //submitting the form, reset everything and close form
    e.preventDefault();
    addResToResList();
    displayRestaurant();
    form.reset(); 
    closeForm();
})