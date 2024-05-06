// Retrieving Data
const retrieveBalance = localStorage.getItem("userData");

// Parsing Data
const parsingBalance = JSON.parse(retrieveBalance);

// Storing User Balance
const userBalance = parsingBalance.userbalance;

const balance = document.querySelector("main .userName h3 span");
balance.innerText = userBalance;