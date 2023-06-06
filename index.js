function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}
function matchName(drivers, query) {
  return drivers.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}
const drivers = [
  "John",
  "Mary",
  "Alice",
  "Joel",
  "Mark",
];

console.log(findMatching(drivers, "mary")); // Output: ["Mary"]
console.log(fuzzyMatch(drivers, "jo")); // Output: ["John", "Joel"]
