// Establish Buttons
// Api key 9527e59dbe48971304fcebcf1f9510b7
const apiKey = "9527e59dbe48971304fcebcf1f9510b7"

const WarioStadium = document.getElementById('WarioStadium');
const WaluigiPinball = document.getElementById('WaluigiPinball');
const WarioColosseum = document.getElementById('WarioColosseum');
const WaluigiStadium = document.getElementById('WaluigiStadium');
const MondayListing = document.getElementById('MondayListing');
const TuesdayListing = document.getElementById('TuesdayListing')
const WednesdayListing = document.getElementById('WednesdayListing')
const ThursdayListing = document.getElementById('ThursdayListing')
const FridayListing = document.getElementById('FridayListing')

let CurretLocation = "none"


// function getLocation(city){

//     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (data){
//         console.log(data)
//         getWeather(data)
//     })
// }

// function weeklyForecast(){
//     if (CurretLocation == "Richmond"){
//         getLocation(CurretLocation);
//     } else if (CurretLocation == "Houston"){
//         getLocation(CurretLocation);
//     } else if (CurretLocation == "Tampa"){
//         getLocation(CurretLocation);
//     } else if (CurretLocation == "Seattle"){
//         getLocation(CurretLocation);
//     }
// }

function getWeather(CurretLocation){
    console.log("Screaming in public restrooms")
    console.log()
    if (CurretLocation = "Richmond"){
        let lat = 37.5385087
        let lon = -77.43428
        fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(function (response){
            console.log(response)
            return response.json();
        })
    } else {
        console.log("Error: Doesn't exist yet")
    }
}



WarioStadium.addEventListener('click', function(){
    CurretLocation = "Richmond"
    getWeather(CurretLocation);
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
    TuesdayListing.textContent = CurretLocation;
    WednesdayListing.textContent = CurretLocation;
    ThursdayListing.textContent = CurretLocation;
    FridayListing.textContent = CurretLocation;
})

WaluigiPinball.addEventListener('click', function(){
    CurretLocation = "Houston"
    getWeather(CurretLocation);
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
    TuesdayListing.textContent = CurretLocation;
    WednesdayListing.textContent = CurretLocation;
    ThursdayListing.textContent = CurretLocation;
    FridayListing.textContent = CurretLocation;
})

WarioColosseum.addEventListener('click', function(){
    CurretLocation = "Tampa"
    getWeather(CurretLocation);
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
    TuesdayListing.textContent = CurretLocation;
    WednesdayListing.textContent = CurretLocation;
    ThursdayListing.textContent = CurretLocation;
    FridayListing.textContent = CurretLocation;
})

WaluigiStadium.addEventListener('click', function(){
    CurretLocation = "Seattle"
    getWeather(CurretLocation);
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
    TuesdayListing.textContent = CurretLocation;
    WednesdayListing.textContent = CurretLocation;
    ThursdayListing.textContent = CurretLocation;
    FridayListing.textContent = CurretLocation;
})


