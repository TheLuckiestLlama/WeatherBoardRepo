// Establish Buttons
const WarioStadium = document.getElementById('WarioStadium');
const WaluigiPinball = document.getElementById('WaluigiPinball');
const WarioColosseum = document.getElementById('WarioColosseum');
const WaluigiStadium = document.getElementById('WaluigiStadium');
const MondayListing = document.getElementById('MondayListing')

let CurretLocation = "none"

WarioStadium.addEventListener('click', function(){
    CurretLocation = "Wario Stadium"
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
})

WaluigiPinball.addEventListener('click', function(){
    CurretLocation = "Waluigi Pinball"
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
})

WarioColosseum.addEventListener('click', function(){
    CurretLocation = "Wario Colosseum"
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
})

WaluigiStadium.addEventListener('click', function(){
    CurretLocation = "Waluigi Stadium"
    console.log(CurretLocation);
    MondayListing.textContent = CurretLocation;
})