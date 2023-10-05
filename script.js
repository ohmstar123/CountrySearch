var countrySearchValue, currencySearchValue

// Gather the input values for country and currency code
inputCountry = document.getElementById("countryInput")
inputCurrency = document.getElementById("currencyInput")
searchContent = document.getElementById("searchContent")
changingList = document.getElementById("changingList")

// JSON structure to store all information about the 20 countries
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
    {name: "Montserrat", currency: "XCD", wiki: "https://en.wikipedia.org/wiki/Montserrat", image: "images/ms.png", regions: "Saint Anthony, Saint Peter"}, 
    {name: "New Caledonia", currency: "XPF", wiki: "https://en.wikipedia.org/wiki/New_Caledonia#Geography", image: "images/nc.png", regions: "Province Nord, Province Sud"}, 
    {name: "Canada", currency: "CAD", wiki: "https://en.wikipedia.org/wiki/Canada", image: "images/ca.png", regions: "Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Nunavut, Ontario, Prince Edward Island, Quebec, Saskatchewan Yukon"}
]

// Event listeners to detect for input in the two search boxes
inputCountry.addEventListener("input", handleCountrySearch)
inputCurrency.addEventListener("input", handleCurrencySearch)

// Function to validate and find the countries which contain the values inserted into the country input box
function handleCountrySearch(){
    countryName = inputCountry.value.toUpperCase()
    indexArray = []
    containsNumbers = /[0-9]/
    containsSpecialChar = /[^A-Za-z0-9]/

    if (/^[A-Za-z]*$/.test(countryName)){
        if (countryName != ""){
            for (let i = 0; i < 20; i++){
                if (countryInfo[i].name.toUpperCase().includes(countryName)){
                    indexArray.push(i)
                }
            }
        }
        displaySearch(indexArray)
    }
    else{
        countryName = inputCountry.value
        inputCountry.value = countryName.slice(0, -1)
        alert("Please enter only letters")
    }
}

// Function to validate and find the countries whose currency codes contain the values insertd into the currency input box
function handleCurrencySearch(){
    currencyCode = inputCurrency.value
    indexArray = []
    
    pattern = /^[A-Z]+$/
    containsLowerCase = /[a-z]/
    containsNumbers = /[0-9]/
    containsSpecialChar = /[^A-Za-z0-9]/

    if (currencyCode.length == 3){
        if (pattern.test(currencyCode)){
            if (currencyCode != ""){
                for (let i = 0; i < 20; i++){
                    if (countryInfo[i].currency.includes(currencyCode)){
                        indexArray.push(i)
                    }
                }
            }
        
            displaySearch(indexArray)
        }
    }
    else if (containsLowerCase.test(currencyCode) || containsNumbers.test(currencyCode) || containsSpecialChar.test(currencyCode)){
        inputCurrency.value = currencyCode.slice(0, -1)
        alert("Please only enter capital letters")
    }
    else{
        searchContent.style.display = 'none'
        return
    }

    
}

// Function which displays all the country information using the information it gathered from the two search functions
function displaySearch(array){
    // Empties the searched countries when there is nothing searched
    while(changingList.firstChild){
        changingList.removeChild(changingList.firstChild)
    }

    if (array.length === 0){
        searchContent.style.display = 'none'
        return
    }

    searchContent.style.display = 'block'
    
    //Scans through the JSON structure to get the correct countries and their information. 
    for(let i = 0; i < array.length; i++){
        const node = document.createElement("li")
        const img = document.createElement("img")

        img.src = countryInfo[array[i]].image

        allCountryInfo = document.createElement("div")
        const countryNameTitle = document.createElement("strong")
        const countryName = document.createTextNode(countryInfo[array[i]].name)
        const currencyCodeTitle = document.createElement("strong")
        const currencyCode = document.createTextNode(countryInfo[array[i]].currency)
        const wikiPage = document.createElement("a")
        const countryRegionTitle = document.createElement("strong")

        countryNameTitle.textContent = "Country: "
        currencyCodeTitle.textContent = "Currency: "
        countryRegionTitle.textContent = "Regions:"

        wikiPage.target = "_blank"
        wikiPage.href = countryInfo[array[i]].wiki
        const linkText = document.createElement("p")
        wikiPage.textContent = "Wikipedia"
        wikiPage.appendChild(linkText)

        const countryRegions = document.createElement("ul")
        countryRegions.className = "regions"
        regionList = countryInfo[array[i]].regions.split(",")

        for (let j = 0; j < regionList.length; j++){
            tempLI = document.createElement("li")
            tempLI.textContent = regionList[j]
            countryRegions.appendChild(tempLI)
        }

        allCountryInfo.appendChild(countryNameTitle)
        allCountryInfo.appendChild(countryName)
        allCountryInfo.appendChild(document.createElement("br"))
        allCountryInfo.appendChild(currencyCodeTitle)
        allCountryInfo.appendChild(currencyCode)
        allCountryInfo.appendChild(document.createElement("br"))
        allCountryInfo.appendChild(wikiPage)
        allCountryInfo.appendChild(countryRegionTitle)
        allCountryInfo.appendChild(countryRegions)

        node.appendChild(img)
        node.appendChild(allCountryInfo)

        node.className = "dynamic-country"
        changingList.appendChild(node)
    }

}