// Retrieve data from local storage
const retrievedUserData = localStorage.getItem("userData");

// Parse JSON string back to object
const parsedUserData = JSON.parse(retrievedUserData);

// Access data
const user = parsedUserData.username;

const fullName = document.createElement("h1");
fullName.innerText = user;
document.body.appendChild(fullName);