Object.defineProperty(person, "language", { writable: false });
// person.language = "EN"; // Attempt to change will fail silently or throw error in strict mode
// console.log(person.language); // NO