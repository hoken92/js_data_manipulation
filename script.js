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

// find a way to grab the first array, turn it into all lower case. use a form of iteration to put them into objects

let headers = [];

for (let i = 0; i < colsArray[0].length; i++) {
  let cell = colsArray[0][i];
  headers.push(cell.toLowerCase());
}

// console.log(headers);

for (let i = 1; i < colsArray.length; i++) {
  let listofObjects = {};
  for (let j = 0; j < colsArray[i].length; j++) {
    // Checking for which col & row

    switch (colsArray[i][j]) {
      case colsArray[i][0]:
        listofObjects += `${headers[0]}: ${colsArray[i][j]}, `;
        break;

      case colsArray[i][1]:
        listofObjects += `${headers[1]}: ${colsArray[i][j]}, `;
        break;

      case colsArray[i][2]:
        listofObjects += `${headers[2]}: ${colsArray[i][j]}, `;
        break;

      case colsArray[i][3]:
        listofObjects += `${headers[3]}: ${colsArray[i][j]}`;
        break;
    }
  }

  //Pushes each object into the array after the outer loop
  directory.push(listofObjects);
}

console.log(directory);

// Part 4
// 1. Remove the last element from the sorted array.

// 2. Insert the following object at index 1:
//        { id: "48", name: "Barry", occupation: "Runner", age: "25" }

// 3. Add the following object to the end of the array:
//        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
