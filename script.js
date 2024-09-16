// Part One

const csvString =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

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
