// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         let pilotName = document.getElementById("pilotName");
         let copilotName = document.getElementById("copilotName");
         let fuelLevel = document.getElementById("fuelLevel");
         let cargoMass = document.getElementById("cargoMass");
         let missionTarget = document.getElementById("missionTarget");
         let destination = document.getElementById("destination");
         function includesDigits(str) {
            let decimalDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (i = 0; i < decimalDigits.length; i++) {
               if (str.includes(decimalDigits[i])) {
                  return true;
               }
            }
            return false;
         }
         for (i = 0; i < json.length; i++) {
            destination.innerHTML += `<option value="${i}">${json[i].name}</option>`
         }
         missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `
         destination.addEventListener("change", function (event) {
            let r = destination.value;
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[r].name}</li>
               <li>Diameter: ${json[r].diameter}</li>
               <li>Star: ${json[r].star}</li>
               <li>Distance from Earth: ${json[r].distance}</li>
               <li>Number of Moons: ${json[r].moons}</li>
            </ol>
            <img src="${json[r].image}">
            `
         });
         launchForm.addEventListener("submit", function (event) {
            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("All fields must be filled out.");
               event.preventDefault();
            } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               alert("Fuel Level and Cargo Mass must be numbers.");
               event.preventDefault();
            } else if (includesDigits(pilotName.value) || includesDigits(copilotName.value)) {
               alert("Pilot name and copilot name must not include numbers.");
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
               faultyItems.style.visibility = "visible";
               if (Number(fuelLevel.value) < 10000) {
                  fuelStatus.innerHTML = `Fuel level not sufficient for journey`;
                  launchStatus.innerHTML = `Shuttle not ready for launch`;
                  launchStatus.style.color = "red";
                  ready = false;
               } else {
                  fuelStatus.innerHTML = `Fuel level is high enough for launch`;
               }
               if (Number(cargoMass.value) > 10000) {
                  cargoStatus.innerHTML = `Cargo mass too high to launch.`
                  launchStatus.innerHTML = `Shuttle not ready for launch`;
                  launchStatus.style.color = "red";
                  ready = false;
               } else {
                  cargoStatus.innerHTML = `Cargo mass is low enough for launch`;
               }
               if (ready) {
                  launchStatus.innerHTML = `Shuttle is ready for launch`;
                  launchStatus.style.color = "green";
               }
            }
            event.preventDefault();
         });
      });
   });
});


