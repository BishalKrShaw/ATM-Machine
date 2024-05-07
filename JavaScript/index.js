const userName = document.querySelector("#userName");
const userBalance = document.querySelector("#userBalance");
const userPin = document.querySelector("#userPin");
const submitBtn = document.querySelector("#submitBtn");

const storeUserDetail = () => {
  let username = userName.value;
  let userbalance = userBalance.value;
  let userpin = userPin.value;

  // Convert variables to JSON string
  const userDataToStore = JSON.stringify({
    username: username,
    userbalance: userbalance,
    userpin: userpin,
  });

  // Store JSON string in local storage
  localStorage.setItem("userData", userDataToStore);
};

submitBtn.addEventListener("click", storeUserDetail);
