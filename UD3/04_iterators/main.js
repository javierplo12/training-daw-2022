'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

// Iterates using a traditional for loop
function iterateSimple() {
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]);
  }
}

// Iterates using forEach
function iterateForEach() {
  pilots.forEach(pilot => {
    console.log(pilot);
  });
}

// Maps pilot ids into an array
function mapIds() {
  return pilots.map(pilot => pilot.id);

  // let id = []

  // for (const pilot of pilots) {
  //     console.log(pilot);
  //     id.push(pilot.id)
  // }

}

// Filters out only the Rebels faction
function rebels() {
  return pilots.filter(pilot => pilot.faction === "Rebels");
}

// function rebels() {
//   return pilots
//     .filter((value) => value.faction === 'Rebels')  // Filtramos solo los pilotos de la facción 'Rebels'
//     .map((value) => value.id)                       // Luego obtenemos los ids de los pilotos
//     // .filter((value) => value > 5)                // Comentado: Filtrar ids mayores a 5
// }



// Counts the number of pilots in a specific faction
function totalFaction(faction) {
  return pilots.filter(pilot => pilot.faction === faction).length;
}

// Calculates the average number of years in service for pilots in a given faction
function avgYears(faction) {
  const factionPilots = pilots.filter(pilot => pilot.faction === faction);
  const totalYears = factionPilots.reduce((sum, pilot) => sum + pilot.years, 0);
  return totalYears / factionPilots.length;
}

// Ejecutando funciones para probar su funcionamiento
console.log("Iterate Simple:");
iterateSimple();

console.log("\nIterate forEach:");
iterateForEach();

// Validando los casos de prueba con assert
try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66]);
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]]);

  assert.deepStrictEqual(totalFaction('Rebels'), 2);
  assert.deepStrictEqual(avgYears('Rebels'), 22.5);
  assert.deepStrictEqual(avgYears('Empire'), 25);

  console.log("\nAll tests passed successfully!");
} catch (error) {
  console.error("\nTest failed:", error);
}