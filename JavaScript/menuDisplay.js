// Retrieve data from local storage
const retrievedUserData = localStorage.getItem("userData");

// Parse JSON string back to object
const parsedUserData = JSON.parse(retrievedUserData);

// Access data
const user = parsedUserData.username;
const userpin = parsedUserData.userpin;

const userName = document.querySelector(".userName h2");
userName.innerText = user;


// All options button
const form = document.querySelector(".userName form");
let dataSelectedOption = "";

const allOptionBtn = document.querySelectorAll("main a");

allOptionBtn.forEach((optionBtn) => {
    optionBtn.addEventListener("click", (event) => {
        event.preventDefault();
        form.classList.add("block");
        dataSelectedOption = optionBtn.dataset.option;
    })
})


// Validating PIN
const message = document.querySelector(".message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Extracting value from input field
    const pinValue = document.querySelector("#enterPin").value;

    // Checking pinValue and userPin(localStorage)
    if(pinValue === userpin) {
        message.style.color = "white";
        message.innerText = "Matched Successfully"

        // Redirect to the next page after successful PIN Validation
        window.location.href = `${dataSelectedOption}.html`;
    }
    else{
            message.style.display = "block";
            message.innerText = "Invalid Pin";
            message.style.color = "red";
    }

})