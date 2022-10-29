function Restaurant (name, rating, timesvisited, comments){ //add individual dishes
    this.name = name;
    this.rating = rating;
    this.timesvisited = timesvisited;
    this.comments = comments;
}

let r1 = new Restaurant("Gyubee", 10, 20, "very good");
let restaurantList = [r1];

function addResToResList() {
    const restuarant = new Restaurant(
        document.querySelector('.getname').value,
        document.querySelector('.rating').value,
        document.querySelector('.timesvisited').value,
        document.querySelector('.comments').value,
    )
    restaurantList.push(restaurant);
}

function displayRestaurant() {
    restaurantList.forEach((res) => {
        const div = document.createElement("div");
        div.classList.add("restaurant");
        div.innerHTML =  `<div> ${res.name}</div> 
                        <div> ${res.rating} </div> 
                        <div> ${res.timesvisited} </div> 
                        <div>${res.comments}</div>`;
        const content = document.querySelector(".content");
        content.appendChild(div);
    })
    
}
displayRestaurant();