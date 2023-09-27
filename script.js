//New variables
var countrySearchValue, currencySearchValue

// Gather the input values for country and currency code
inputCountry = document.getElementById("countryInput")
inputCurrency = document.getElementById("currencyInput")

// Function which executes the button press when the user presses enter within the country input box
inputCountry.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        document.getElementById("countryBtn").click();
    }
})

// Function which executes the button press when the user presses enter within the currency code input box
inputCurrency.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        document.getElementById("currencyBtn").click();
    }
})

function countryByName(){
    inputValue = document.getElementById("countryInput").value.trim()
    pattern = /\d/ // Pattern which finds any integer values

    // Checks whether there is an integer within the input box
    if (pattern.test(inputValue) == true){
        alert("Refrain from using numbers \nPlease try again")
    }
    else{
        countrySearchValue = inputValue.toUpperCase()
        alert(displayResultsUsingCountry(countrySearchValue))
    }
}


function countryByCurrency(){
    inputValue = document.getElementById("currencyInput").value.trim()
    pattern = /^[A-Z]+$/ // Pattern which checks from the start to end of input value to see if each letter is a capital letter

    console.log(pattern.test(inputValue))

    // Check to make sure the user inputs no less than 3 characters
    if (inputValue.length < 3){
        alert("Please enter a 3 character currency code")
    }
    else{
        // Checks whether the inputValue is all capital 
        if (pattern.test(inputValue)){
            currencySearchValue = inputValue
            alert(displayResultsUsingCurrency(currencySearchValue))
        }
        else{
            alert("Please make sure the currency code is capital")
        }
    }
}

// JSON structure for countries and their currency codes
const countryInfo = [
    {name: "Australia", currency: "AUD"}, 
    {name: "Bangladesh", currency: "BDT"}, 
    {name: "Djibouti", currency: "DJF"}, 
    {name: "Kiribati", currency: "AUD"}, 
    {name: "Comoros", currency: "KMF"}, 
    {name: "Dominica", currency: "XCD"}, 
    {name: "Monaco", currency: "EUR"}, 
    {name: "Costa Rica", currency: "CRC"}, 
    {name: "Antigua and Barbuda", currency: "XCD"}, 
    {name: "Cyprus", currency: "CYP"}, 
    {name: "Solomon Islands", currency: "SBD"}, 
    {name: "Bosnia and Herzegovina", currency: "BAM"}, 
    {name: "Fiji", currency: "JFD"}, 
    {name: "Eritrea", currency: "ETB"}, 
    {name: "Sao Tome and Principe", currency: "STD"}, 
    {name: "Equatorial Guinea", currency: "XAF"}, 
    {name: "Guinea-Bissau", currency: "XOF"}, 
    {name: "Montserrat", currency: "XCD"}, 
    {name: "New Caledonia", currency: "XPF"}, 
    {name: "Canada", currency: "CAD"}
]

function displayResultsUsingCountry(validatedValue){
    let currentNameCapitalized, capitalizedValidatedValue
    let result = "Match Found!"
    let counter = 0

    // If nothing is entered into the search box, display "no matches found"
    if (validatedValue.length == 0){
        return "No matching countries found"
    }
    else{
        // Loop through all 20 countries and compare by their names. If one is found, display its information on the screen. Maximum countries is 5
        for (let i = 0; i < 20; i++){
            currentNameCapitalized = countryInfo[i].name.toUpperCase()
            capitalizedValidatedValue = validatedValue.toUpperCase()
            
            if (currentNameCapitalized.includes(capitalizedValidatedValue) && counter < 5){
                result += `\nCountry: ${countryInfo[i].name}\nCurrency Code: ${countryInfo[i].currency}\n`  
                counter++
            }
        }

        // If no countries are found, tell the user, ""
        if (result == "Match Found!"){
            return "No matching countries found"
        }
        else{
            return result
        }
    }
}

function displayResultsUsingCurrency(validatedValue){
    let result = "Match Found!"
    let counter = 0

    // Check through all 20 countries and compare their currency codes. Only the first 5 matching codes will shown on screen
    for (let i = 0; i < 20; i++){
        if (validatedValue == countryInfo[i].currency && counter <= 5){
            result += `\nCountry: ${countryInfo[i].name}\nCurrency Code: ${countryInfo[i].currency}\n` 
            counter++
        }
    }

    // If results variable is unchanged, no countries are found, therefore display "no matches found" on the screen. 
    // Otherwise print the results found
    if (result == "Match Found!"){
        return "No matching countries found"
    }
    else{
        return result
    }
}