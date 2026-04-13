// index.js
const weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!
// function fetchWeatherAlerts(state) {
    

//     fetch(`https://api.weather.gov/alerts/active?area=${STATE_ABBR}`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error ('Network response was not ok')
//         }
//         return response.json()
//     })
//     .then(data =>{
//         console.log(data)
//         displayAlerts(data)
//     })
//     .catch(errorObject =>{
//         handleError(errorObject.message)
//     })
// }

// function displayAlerts(data){
//     const alertsContainer = document.getElementById('alerts-container')
//     const summaryHeader = document.getElementById('summary-header')

//     alertsContainer.innerHTML = '';
//     hideError()

//     const title = data.title;
//     const count = data.features.length
//     summaryHeader.textContent = `${title}: ${count}`

//     data.features.forEach(alert=>{
//         const headline = alert.properties.headline;
//         const li = document.createElement('li')
//         li.textContent = headline
//         alertsContainer.appendChild()
//     })

//     function handleError(message){
//         const errorDiv = document.getElementById('error-message')
//         errorDiv.textContent = message
//         errorDiv.style.display = 'block'
//     }

//     function hideError(){
//         const errorDiv = document.getElementById('error-message')
//         errorDiv.textContent= ''
//         errorDiv.style.display= 'none'
//   
// CORRECT CODE

async function fetchWeatherAlerts(state) {
  const input = document.getElementById("state-input")
  const errorDiv = document.getElementById("error-message")

  try {
    const response = await fetch(weatherApi + state)
    const data = await response.json()

    displayAlerts(data)

    input.value = ""

  } catch (error) {
    errorDiv.textContent = error.message
    errorDiv.classList.remove("hidden")
  }
}

function displayAlerts(data) {

  const displayDiv = document.getElementById("alerts-display")
  const errorDiv = document.getElementById("error-message")

  displayDiv.innerHTML = ""
  errorDiv.textContent = ""
  errorDiv.classList.add("hidden")

  const alerts = data.features

  displayDiv.textContent = `Weather Alerts: ${alerts.length}`

  for (let alert of alerts) {
    const p = document.createElement("p")
    p.textContent = alert.properties.headline
    displayDiv.appendChild(p)
  }
}

document.getElementById("fetch-alerts").addEventListener("click", () => {
  const state = document.getElementById("state-input").value
  fetchWeatherAlerts(state)
})