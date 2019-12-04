// Write your JavaScript code here!
window.addEventListener("load", function(){
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   launchForm.addEventListener("submit", function(event){
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields must be filled out.");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be numbers.");
         event.preventDefault();
      } else if (typeof pilotName.value !== "string" || typeof copilotName.value !== "string"){
         alert("I don't even know how you did that");
         event.preventDefault();
      } else {
         let faultyItems = document.getElementById("faultyItems");
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         let launchStatus = document.getElementById("launchStatus");
         let ready = true;
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`;
         if(Number(fuelLevel.value)<10000){
            fuelStatus.innerHTML = `Fuel level not sufficient for journey`;
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            ready = false;
         } else {
            fuelStatus.innerHTML = `Fuel level is high enough for launch`;
         }
         if(Number(cargoMass.value)>10000){
            cargoStatus.innerHTML = `Cargo mass too high to launch.`
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible";
            ready = false;
         } else {
            cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
         }
         if(ready){
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
            faultyItems.style.visibility = "hidden";
         }
      }
      event.preventDefault();
   })
   // fetch("").then(function(response){
   // });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
