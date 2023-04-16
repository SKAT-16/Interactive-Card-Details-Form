var themeChanger = document.querySelector(".theme-changer");
var themeChangerCircle = document.querySelector(".theme-changer span");
var mainSection = document.querySelector("body");
var currentTheme = "light";

themeChanger.addEventListener("click", function changeTheme() {
    if (currentTheme == "light") {
        mainSection.classList.add("dark-mode");
        themeChangerCircle.classList.add("activate-dark-mode");
        currentTheme = "dark";
    }
    else if (currentTheme == "dark") {
        mainSection.classList.remove("dark-mode");
        themeChangerCircle.classList.remove("activate-dark-mode");
        currentTheme = "light";
    }
});


var cardNameTextInput = document.querySelector("#card-name");
var cardNameTextOutput = document.querySelector("#card-name-text");
var cardName = "";
cardNameTextInput.addEventListener("input", function () {
    if (cardNameTextInput.value.length > 20) {
        cardNameTextInput.value = cardName;
        return;
    } else if (cardNameTextInput.value.length != 0) {
        cardName = cardNameTextInput.value;
        cardNameTextOutput.textContent = cardName;
    }
});
cardNameTextInput.addEventListener("emptied", function () {
    console.log("45");
    cardNameTextOutput.textContent = "Jane Appleseed";
});

var cardNumTextInput = document.querySelector("#card-number");
var cardNumTextOutput = document.querySelector("#card-number-text");
var cardNumText = document.querySelector("#card-number-label");
var cardNumErrorText = document.querySelector(".card-number-error-text");
var cardNum;

cardNumTextInput.addEventListener("input", function () {
    cardNum = cardNumTextInput.value;
    cardNumErrorText.textContent = "";
    if (cardNumTextInput.value.length != 0) {
        if (!cardNumTextInput.validity.valid)
            cardNumErrorText.textContent = "Invalid input";
        else if (cardNum.length != 16)
            cardNumErrorText.textContent = "Must be 16 digits long!";
        else {
            cardNumTextOutput.textContent = "";
            for (var i = 0; i < 16; i++) {
                if ((i) % 4 == 0)
                    cardNumTextOutput.textContent += " ";
                cardNumTextOutput.textContent += cardNum.at(i);
            }
        }
        if (cardNumErrorText.textContent != "") {
            cardNumErrorText.style.color = "hsl(0, 100%, 67%)";
            cardNumTextInput.style.borderColor = "hsl(0, 100%, 67%)";
        } else {
            cardNumText.style.color = "hsl(278, 68%, 11%)";
            cardNumTextInput.style.borderColor = "hsl(0, 0%, 70%)";
        }
    }
});

var expMonthInput = document.querySelector("#month");
var expYearInput = document.querySelector("#year");
var expDateText = document.querySelector("#exp-date-label");
var expDateOutput = document.querySelector("#exp-date-text");
var monthInputErrorText = document.querySelector(".month-error-text");
var yearInputErrorText = document.querySelector(".year-error-text");
var months = "";
var years = "";

expMonthInput.addEventListener("input", function () {
    months = expMonthInput.value;
    monthInputErrorText.textContent = "";
    if (expMonthInput.value.length != 0) {
        if (!expMonthInput.validity.valid)
            monthInputErrorText.textContent = "Invalid input";
        else if (months > 12 || months <= 0)
            monthInputErrorText.textContent = "Must be a valid month!";
        else
            expDateOutput.textContent = months + "/" + years;

        if (monthInputErrorText.textContent != "") {
            expDateText.style.color = "hsl(0, 100%, 67%)";
            expMonthInput.style.borderColor = "hsl(0, 100%, 67%)";
        } else {
            expDateText.style.color = "hsl(278, 68%, 11%)";
            expMonthInput.style.borderColor = "hsl(0, 0%, 70%)";
        }
    }
});

expYearInput.addEventListener("input", function () {
    years = expYearInput.value;
    yearInputErrorText.textContent = "";
    if (expYearInput.value.length != 0) {
        if (!expYearInput.validity.valid)
            yearInputErrorText.textContent = "Invalid input";
        else if (years <= new Date().getFullYear() - 2000)
            yearInputErrorText.textContent = "Must be in the future!";
        else
            expDateOutput.textContent = months + "/" + years;


        if (yearInputErrorText.textContent != "") {
            expDateText.style.color = "hsl(0, 100%, 67%)";
            expYearInput.style.borderColor = "hsl(0, 100%, 67%)";
        } else {
            expDateText.style.color = "hsl(278, 68%, 11%)";
            expYearInput.style.borderColor = "hsl(270, 3%, 87%)";
        }
    }
});

var cardCVCTextInput = document.querySelector("#cvc");
var cardCVCTextOutput = document.querySelector("#cvc-number-text");
var cardCVCText = document.querySelector("#cvc-label");
var cardCVCErrorText = document.querySelector(".cvc-error-text");
var cardCVC;

cardCVCTextInput.addEventListener("input", function () {
    cardCVC = cardCVCTextInput.value;
    cardCVCErrorText.textContent = "";
    if (cardCVCTextInput.value.length != 0) {
        if (!cardCVCTextInput.validity.valid)
            cardCVCErrorText.textContent = "Invalid input";
        else if (cardCVC < 100 || cardCVC > 999)
            cardCVCErrorText.textContent = "Must be 3 digit!";
        else
            cardCVCTextOutput.textContent = cardCVC;

        if (cardCVCErrorText.textContent != "") {
            cardCVCText.style.color = "hsl(0, 100%, 67%)";
            cardCVCTextInput.style.borderColor = "hsl(0, 100%, 67%)";
        } else {
            cardCVCText.style.color = "hsl(278, 68%, 11%)";
            cardCVCTextInput.style.borderColor = "hsl(270, 3%, 87%)";
        }
    }
});

var cardForm = document.querySelector("form");
var completeSection = document.querySelector(".complete-section");

var confirmBtn = document.querySelector("#confirm-btn");
confirmBtn.addEventListener("click", function () {
    if (cardCVCTextInput.value.length != 0 &&
        expYearInput.value.length != 0 &&
        cardNameTextInput.value.length != 0 &&
        cardNumTextInput.value.length != 0 &&
        expMonthInput.value.length != 0) {
        
        cardForm.style.display = "none";
        completeSection.classList.add("completed");
    }

});