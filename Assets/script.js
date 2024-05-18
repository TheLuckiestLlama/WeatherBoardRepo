// Establish Buttons
const WarioStadium = document.getElementById('WarioStadium');
const WaluigiPinball = document.getElementById('WaluigiPinball');
const WarioColosseum = document.getElementById('WarioColosseum');
const WaluigiStadium = document.getElementById('WaluigiStadium');

let CurretLocation = "none"

WarioStadium.addEventListener('click', function(){
    CurretLocation = "Wario Stadium"
    console.log(CurretLocation);
})

WaluigiPinball.addEventListener('click', function(){
    CurretLocation = "waluigi Pinball"
    console.log(CurretLocation);
})

WarioColosseum.addEventListener('click', function(){
    CurretLocation = "Wario Colosseum"
    console.log(CurretLocation);
})

WaluigiStadium.addEventListener('click', function(){
    CurretLocation = "Waluigi Stadium"
    console.log(CurretLocation);
})