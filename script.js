var countrySearchValue, currencySearchValue

// Gather the input values for country and currency code
inputCountry = document.getElementById("countryInput")
inputCurrency = document.getElementById("currencyInput")
searchContent = document.getElementById("searchContent")
changingList = document.getElementById("changingList")

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
//NEW STUFF//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
inputCountry.addEventListener("input", handleSearch)
log = document.getElementById("testing")

// function handleSearch(e){
//     countryName = inputCountry.value.toUpperCase()
//     log.textContent = e.target.value
// }

function handleSearch(){
    countryName = inputCountry.value.toUpperCase()
    currencyCode = inputCurrency.value.toUpperCase()
    indexArray = []

    if (countryName != ""){
        for (let i = 0; i < 20; i++){
            if (countryInfo[i].name.toUpperCase().includes(countryName)){
                indexArray.push(i)
            }
        }
    }
    
    
}


const countryInfo = [
    {name: "Australia", currency: "AUD", wiki: "https://en.wikipedia.org/wiki/Australia", image: "images/au.png", regions: "Australian Capital Territory, New South Wales, Northern Territory, Queensland, South Australia, Tasmania, Victoria, Western Australia"}, 
    {name: "Bangladesh", currency: "BDT", wiki: "https://en.wikipedia.org/wiki/Bangladesh", image: "images/bd.png", regions: "Barishal, Chattogram, Dhaka, Khulna, Rajshahi, Rangpur, Sylhet"}, 
    {name: "Djibouti", currency: "DJF", wiki: "https://en.wikipedia.org/wiki/Djibouti", image: "images/dj.png", regions: "Arta, Djibouti"}, 
    {name: "Kiribati", currency: "AUD", wiki: "https://en.wikipedia.org/wiki/Kiribati", image: "images/ki.png", regions: "Gilbert Islands"}, 
    {name: "Comoros", currency: "KMF", wiki: "https://en.wikipedia.org/wiki/Comoros", image: "images/km.png", regions: "Grande Comore, Moheli"}, 
    {name: "Dominica", currency: "XCD", wiki: "https://en.wikipedia.org/wiki/Dominica", image: "images/dm.png", regions: "Saint Andrew, Saint George, Saint John, Saint Joseph, Saint Luke, Saint Patrick, Saint Paul"}, 
    {name: "Monaco", currency: "EUR", wiki: "https://en.wikipedia.org/wiki/Monaco", image: "images/mc.png", regions: "Fontvieille, La Condamine, Monaco-Ville, Monte-Carlo, Saint-Roman"}, 
    {name: "Costa Rica", currency: "CRC", wiki: "https://en.wikipedia.org/wiki/Costa_Rica", image: "images/cr.png", regions: "Alajuela, Cartago, Guanacaste, Heredia, Limon, Puntarenas, San Jose"}, 
    {name: "Antigua and Barbuda", currency: "XCD", wiki: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda", image: "images/ag.png", regions: "Redonda, Saint George, Saint John, Saint Paul, Saint Peter, Saint Philip"}, 
    {name: "Cyprus", currency: "CYP", wiki: "https://en.wikipedia.org/wiki/Cyprus", image: "images/cy.png", regions: "Ammochostos, Keryneia, Larnaka, Lefkosia, Lemesos, Pafos"}, 
    {name: "Solomon Islands", currency: "SBD", wiki: "https://en.wikipedia.org/wiki/Solomon_Islands", image: "images/sb.png", regions: "Choiseul, Guadalcanal, Western"}, 
    {name: "Bosnia and Herzegovina", currency: "BAM", wiki: "https://en.wikipedia.org/wiki/Bosnia_and_Herzegovina", image: "images/ba.png", regions: "Brcko Distrikt, Federacija Bosne i Hercegovine, Republika Srpska"}, 
    {name: "Fiji", currency: "JFD", wiki: "https://en.wikipedia.org/wiki/Fiji", image: "images/fj.png", regions: "Central, Eastern, Northern, Rotuma, Western"}, 
    {name: "Eritrea", currency: "ETB", wiki: "https://en.wikipedia.org/wiki/Eritrea", image: "images/er.png", regions: "Al Awsat, Janubi al Bahri al Ahmar, Shimali al Bahri al Ahmar"}, 
    {name: "Sao Tome and Principe", currency: "STD", wiki: "https://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe", image: "images/st.png", regions: "Agua Grande"}, 
    {name: "Equatorial Guinea", currency: "XAF", wiki: "https://en.wikipedia.org/wiki/Equatorial_Guinea", image: "images/gq.png", regions: "Bioko Norte, Kie-Ntem, Litoral, Wele-Nzas"}, 
    {name: "Guinea-Bissau", currency: "XOF", wiki: "https://en.wikipedia.org/wiki/Guinea-Bissau", image: "images/gw.png", regions: "Bissau, Gabu"}, 
    {name: "Montserrat", currency: "XCD", wiki: "https://en.wikipedia.org/wiki/Montserrat", images: "images/ms.png", regions: "Saint Anthony, Saint Peter"}, 
    {name: "New Caledonia", currency: "XPF", wiki: "https://en.wikipedia.org/wiki/New_Caledonia#Geography", images: "images/nc.png", regions: "Province Nord, Province Sud"}, 
    {name: "Canada", currency: "CAD", wiki: "https://en.wikipedia.org/wiki/Canada", images: "images/ca.png", regions: "Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Nunavut, Ontario, Prince Edward Island, Quebec, Saskatchewan Yukon"}
]







/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
