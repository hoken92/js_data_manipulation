// Part One

const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let currentCell = 1;

for (let i = 0; i < csvString.length; i++) {
  //checking for new cell
  if (csvString[i] === ",") {
    currentCell++;
    continue;
  }
  // checking for a new row
  if (csvString[i] === "\n") {
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    currentCell = 1;
    continue;
  }

  switch (currentCell) {
    case 1:
      cell1 += csvString[i];
      break;
    case 2:
      cell2 += csvString[i];
      break;
    case 3:
      cell3 += csvString[i];
      break;
    case 4:
      cell4 += csvString[i];
      break;

    default:
      console.log(`cell${currentCell} doesn't exist`);
      break;
  }

  if (
    (currentCell === 4 && csvString[i + 1] === "\n") ||
    i + 1 === csvString.length
  ) {
    // console.log(cell1, cell2, cell3, cell4);
  }
}

// Part two
// ==============================

// Counts how many columns and stored in columns
let cols = csvString.split("\n");

let colsArray = [];

for (let i = 0; i < cols.length; i++) {
  let cells = cols[i].split(",");
  colsArray.push(cells);
}

// Part three
// ==============================

let directory = [];

for (let i = 1; i < colsArray.length; i++) {
  let listofObjects = {};
  for (let j = 0; j < colsArray[i].length; j++) {
    // Checking for which col & row

    switch (colsArray[i][j]) {
      case colsArray[i][0]:
        listofObjects.id = colsArray[i][j];
        break;

      case colsArray[i][1]:
        listofObjects.name = colsArray[i][j];
        break;

      case colsArray[i][2]:
        listofObjects.occupation = colsArray[i][j];
        break;

      case colsArray[i][3]:
        listofObjects.age = colsArray[i][j];
        break;
    }
  }

  //Pushes each object into the array after the outer loop
  directory.push(listofObjects);
}

// console.log(directory);

// Part 4
// 1. Remove the last element from the sorted array.
directory.pop();

// 2. Insert the following object at index 1:
//        { id: "48", name: "Barry", occupation: "Runner", age: "25" }
directory.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// 3. Add the following object to the end of the array:
//        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
directory.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
// console.log(directory);

// Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let averageAge;
let amountOfPeople = 0;

for (let i = 0; i < directory.length; i++) {
  if (directory[i].age != undefined) {
    let age = directory[i].age;
    averageAge = +age;
    amountOfPeople++;
  }
}

averageAge /= amountOfPeople;
console.log(
  `The average age for the directory array is ${averageAge} years old.`
);

// Part 5: Full Circle

let csvData = "";

// Need to iterate through the object/array once to grab keys
// Then grab each object value
// After each string, add a comma and space
// After every row, such as the outer loop add a \n

let headers = `${Object.keys(directory[0]).toString()},\n`;

csvData += headers;

for (let i = 0; i < directory.length; i++) {
  for (const value in directory[i]) {
    csvData += `${directory[i][value].toString()},`;
  }

  csvData += "\n";
}

console.log(JSON.stringify(csvData.slice(0, -2)));
