// Function to retrieve balance from local storage
function retrieveBalance() {
  return new Promise((resolve, reject) => {
    const balance = localStorage.getItem("userData");
    if (balance) {
      const parseBalance = JSON.parse(balance);
      const userBalance = parseBalance.userbalance;
      resolve(userBalance);
    } else {
      reject(new Error("No balance found in local storage"));
    }
  });
}

// Function to update and save balance to local storage
function updateAndSaveBalance(newBalance) {
  return new Promise((resolve, reject) => {
    const balance = localStorage.getItem("userData");
    if (balance) {
      const parsedBalance = JSON.parse(balance);
      parsedBalance.userbalance = newBalance;
      localStorage.setItem("userData", JSON.stringify(parsedBalance));
      resolve(newBalance);
    } else {
      reject(new Error("No balance found in the local storage"));
    }
  });
}

// Input Balance field and submit button
const form = document.querySelector("form");

const message = document.querySelector(".message");

// Withdraw amount and Checking balance and updating balance function
function checkAmount(inputAmount, userBalance) {
  if (inputAmount > userBalance) {
    message.style.color = "red";
    message.innerText = "Amount Not Available";
  } else {
    const updatedBalance = userBalance - inputAmount;
    message.style.color = "white";
    message.innerText = `Your current Balance is Rs. ${updatedBalance}`;
    updateAndSaveBalance(updatedBalance)
      .then(() => {
        console.log("Balance updated and saved successfully:", updatedBalance);
        // Optionally, perform any additional actions after updating and saving the balance
      })
      .catch((error) => {
        console.error("Error updating balance:", error);
        // Optionally, handle the error, show a message to the user, etc.
      });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputAmount = parseFloat(
    document.querySelector("form #enterAmount").value
  );
  retrieveBalance()
    .then((userBalance) => {
      checkAmount(inputAmount, userBalance);
    })
    .catch((error) => {
      console.error("Error retrieving balance:", error);
      // Optionally, handle the error, show a message to the user, etc.
    });
});
