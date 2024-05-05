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