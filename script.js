function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000); 
    });
}

// Testing the fetchData function
fetchData().then((result) => {
    console.log(result);
});




function fetchData() {
    return new Promise((resolve, reject) => {
       
        const success = Math.random() > 0.5; 
        
        if (success) {
            resolve("Data fetched successfully");
        } else {
            reject("Failed to fetch data");
        }
    });
}





function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const success = true; 
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000); 
    });
}

t
async function fetchDataAsync() {
    try {
        const result = await fetchData(); 
        console.log(result); 
    } catch (error) {
        console.error(error); 
    }
}


fetchDataAsync();



document.getElementById('fetch-button').addEventListener('click', getCountryData);

async function getCountryData() {
    const url = "https://restcountries.com/v3.1/all";
    const errorMessageDiv = document.getElementById('error-message');
    const countryListDiv = document.getElementById('country-list');

    // Clear previous error messages and country list
    errorMessageDiv.textContent = '';
    countryListDiv.innerHTML = '';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        displayCountryData(data);
    } catch (error) {
        errorMessageDiv.textContent = 'Failed to fetch country data: ' + error.message;
    }
}

function displayCountryData(countries) {
    const countryListDiv = document.getElementById('country-list');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.innerHTML = `
            <h3>${country.name.common}</h3>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
        `;
        countryListDiv.appendChild(countryDiv);
    });
}






