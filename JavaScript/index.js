const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPin = document.querySelector("#userPin");
const submitBtn = document.querySelector("#submitBtn");

const storeUserDetail = () => {
    let username = userName.value;
    let useremail = userEmail.value;
    let userpin = userPin.value;

    // Convert variables to JSON string
    const userDataToStore = JSON.stringify(
        {
            username: username,
            usermail: useremail,
            userpin: userpin,
        }
    );

    // Store JSON string in local storage
    localStorage.setItem("userData", userDataToStore);
}

submitBtn.addEventListener("click", storeUserDetail);