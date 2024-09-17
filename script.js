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
    console.log(cell1, cell2, cell3, cell4);
  }
}

// Part two

// Counts how many columns and stored in columns
let cols = csvString.split("\n");

let colsArray = [];

for (let i = 0; i < cols.length; i++) {
  let cells = cols[i].split(",");
  colsArray.push(cells);
}
console.log(colsArray);
