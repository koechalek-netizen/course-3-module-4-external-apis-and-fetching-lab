// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
function fetchWeatherAlerts(state) {
    const url = "https://api.weather.gov/alerts/active?area= ${state}"

    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error ('Network response was not ok')
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
        dislayAlerts(data)
    })
    .catch(errorObject =>{
        handleError(errorObject.message)
    })
}

function displayAlerts(data){
    const alertsContainer = document.getElementById('alerts-container')
    const summaryHeader = document.getElementById('summary-header')

    alertsContainer.innerHTML = '';
    hideError()

    const title = data.title;
    const count = data.features.length
    summaryHeader.textContent = `${title}: ${count}`

    data.features.forEach(alert=>{
        const headline = alert.properties.headline;
        const li = document.createElement('li')
        li.textContent = headline
        alertsContainer.appendChild()
    })

    function handleError(message){
        const errorDiv = document.getElementById('error-message')
        errorDiv.textContent = message
        errorDiv.style.display = 'block'
    }

    function hideError(){
        const errorDiv = document.getElementById('error-message')
        errorDiv.textContent= ''
        errorDiv.style.display= 'none'
    }
}