// Retrieve data from local storage
const retrievedUserData = localStorage.getItem("userData");

// Parse JSON string back to object
const parsedUserData = JSON.parse(retrievedUserData);

// Access data
const user = parsedUserData.username;

const userName = document.querySelector(".userName");
userName.innerText = user;

console.log(user);