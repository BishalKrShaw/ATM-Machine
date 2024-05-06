// Retrieve data from local storage
const retrievedUserData = localStorage.getItem("userData");

// Parse JSON string back to object
const parsedUserData = JSON.parse(retrievedUserData);

// Access data
const user = parsedUserData.username;
const userpin = parsedUserData.userpin;

const userName = document.querySelector(".userName h2");
userName.innerText = user;

console.log(user);
console.log(userpin);

// Validating PIN
const form = document.querySelector(".userName form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Extracting value from input field
    const pinValue = document.querySelector("#enterPin").value;

    // Checking pinValue and userPin(localStorage)
    if(pinValue === userpin) {
        alert("Matched successfully");
    }
    else{
        alert("Invalid Pin");
    }

})