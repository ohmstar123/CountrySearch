inputCountry = document.getElementById("countryInput").value.trim()
console.log(inputCountry.value)

function countryByName(){
    inputValue = document.getElementById("countryInput").value.trim()
    pattern = /\d/ //pattern which finds any integer values

    //checks whether there is an integer within the input box
    if (pattern.test(inputValue) == true){
        alert("Refrain from using numbers \nPlease try again")
    }
    else{
        alert("Well Played")
    }
}


function countryByCurrency(){
    inputValue = document.getElementById("currencyInput").value.trim()
    pattern = /^[A-Z]+$/ //pattern which checks from the start to end of input value to see if each letter is a capital letter

    console.log(pattern.test(inputValue))

    // Checks whether the inputvalue is all capital 
    if (pattern.test(inputValue)){
        alert("Well Played")
    }
    else{
        alert("Please make sure the currency code is capital")
    }
}