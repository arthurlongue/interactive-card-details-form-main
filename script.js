const cardNumber = document.getElementById("card-number")
const cardName = document.getElementById("card-name")
const cardMonth = document.getElementById("card-month")
const cardYear = document.getElementById("card-year")
const cardCvc = document.getElementById("card-cvc")
const formCheck = document.getElementById("form")
const formName = document.getElementById("name")
const formNumber = document.getElementById("number")
const formMonth = document.getElementById("month")
const formYear = document.getElementById("year")
const formCvc = document.getElementById("cvc")
const errorMsg = document.getElementsByClassName("error-message")
const validationMsg = document.getElementById("validation")
const pageRefreshButton = document.getElementById("page-refresh")

formName.addEventListener("input", function name() {
  cardName.innerHTML = formName.value.toUpperCase()
  if (cardName.innerHTML == "") {
    cardName.innerHTML = formName.placeholder
  }
})

formNumber.addEventListener("input", function number() {
  let cardNumberInput = formNumber.value
  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "")
  formattedCardNumber = formattedCardNumber.substring(0, 16)
  let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g)
  if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(" ")
  }
  if (cardNumberInput !== formattedCardNumber) {
    formNumber.value = formattedCardNumber
  }
  cardNumber.innerHTML = formNumber.value
  if (cardNumber.innerHTML == "") {
    cardNumber.innerHTML = formNumber.placeholder
  }
})

formMonth.addEventListener("input", function dateM() {
  if (formMonth.value.length == 1) {
    formMonth.value = "0" + formMonth.value
    cardMonth.innerHTML = formMonth.value
  } else {
    formMonth.value = formMonth.value.substring(1, 3)
    cardMonth.innerHTML = formMonth.value
  }
  if (cardMonth.innerHTML == "" || cardMonth.innerHTML == "00") {
    cardMonth.innerHTML = formMonth.placeholder
  }
})

formYear.addEventListener("input", function dateY() {
  if (formYear.value.length == 1) {
    formYear.value = "0" + formYear.value
    cardYear.innerHTML = formYear.value
  } else {
    formYear.value = formYear.value.substring(1, 3)
    cardYear.innerHTML = formYear.value
  }
  if (cardYear.innerHTML == "" || cardYear.innerHTML == "00") {
    cardYear.innerHTML = formYear.placeholder
  }
})

formCvc.addEventListener("input", function cvc() {
  if (formCvc.value.length == 1) {
    formCvc.value = "00" + formCvc.value
    cardCvc.innerHTML = formCvc.value
  } else if (formCvc.value.length > 1) {
    formCvc.value = "0" + formCvc.value
    formCvc.value = formCvc.value.substring(2)
    cardCvc.innerHTML = formCvc.value
  }
  if (cardCvc.innerHTML == "") {
    cardCvc.innerHTML = formCvc.placeholder
  }
})

function nameValidation() {
  if (formName.value.length > 0) {
    formName.style.outline = "solid 1px silver"
    errorMsg[0].style.visibility = "hidden"
    return true
  } else {
    formName.style.outline = `solid 2px hsl(0, 100%, 66%)`
    errorMsg[0].style.visibility = "visible"
  }
}

function numberValidation() {
  if (formNumber.value.length === 19) {
    formNumber.style.outline = "solid 1px silver"
    errorMsg[1].style.visibility = "hidden"
    return true
  } else {
    formNumber.style.outline = `solid 2px hsl(0, 100%, 66%)`
    errorMsg[1].style.visibility = "visible"
  }
}

function dateValidation() {
  if (formMonth.value > 0 && formMonth.value <= 12 && formYear.value >= 23 && formYear.value < 100) {
    formMonth.style.outline = "solid 1px silver"
    formYear.style.outline = "solid 1px silver"
    errorMsg[2].style.visibility = "hidden"
    return true
  } else {
    formMonth.style.outline = `solid 2px hsl(0, 100%, 66%)`
    formYear.style.outline = `solid 2px hsl(0, 100%, 66%)`
    errorMsg[2].style.visibility = "visible"
  }
}

function cvcValidation() {
  if (formCvc.value.length === 3) {
    formCvc.style.outline = "solid 1px silver"
    errorMsg[3].style.visibility = "hidden"
    return true
  } else {
    formCvc.style.outline = `solid 2px hsl(0, 100%, 66%)`
    errorMsg[3].style.visibility = "visible"
  }
}

formCheck.addEventListener("submit", function submit(event) {
  event.preventDefault()
  nameValidation()
  numberValidation()
  dateValidation()
  cvcValidation()
  if (nameValidation() && numberValidation() && cvcValidation() && dateValidation()) {
    formCheck.style.display = "none"
    validationMsg.style.display = "flex"
  }
})

pageRefreshButton.addEventListener("click", function refres() {
  formCheck.style.display = "grid"
  validationMsg.style.display = "none"
  formCheck.value = ""
  formName.value = ""
  formNumber.value = ""
  formMonth.value = ""
  formYear.value = ""
  formCvc.value = ""
})
