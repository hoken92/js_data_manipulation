const csvString = `ID,Name,Occupation,Age,IsCool\n42,Bruce,Knight,41,true\n57,Bob,Fry Cook,19,true\n63,Blaine,Quiz Master,58,false\n98,Bill,Doctor's Assistant,26,true`;

// Instead of having four different variables, create an array!
//part 1
let cells = [];
let currentCell = 0;

//part 2a
let columns = 0;
let currentRow = 0;

//part 2
let table = [];

//Ex: helper function
function resetVars() {
  cells = [];
  currentCell = 0;
}

for (let i = 0; i < csvString.length; i++) {
  //checking for new cell
  if (csvString[i] === ",") {
    // Part 2a
    if (currentRow === 0) {
      columns++;
    }

    currentCell++;
    continue;
  }
  // checking for a new row
  if (csvString[i] === "\n") {
    resetVars();
    currentRow++;
    continue;
  }

  // Part 1 code
  if (cells[currentCell]) {
    cells[currentCell] += csvString[i];
  } else {
    cells[currentCell] = csvString[i];
  }

  //Part 2
  if (table[currentRow] === undefined) {
    table[currentRow] = [];
  }

  if (table[currentRow][currentCell]) {
    table[currentRow][currentCell] += csvString[i];
  } else {
    table[currentRow][currentCell] = csvString[i];
  }

  // Part 1
  // if (
  //   (currentCell === columns && csvString[i + 1] === '\n') ||
  //   i + 1 === csvString.length
  // ) {
  //   // console.log(cell1, cell2, cell3, cell4);
  //   console.log(cells.toString());
  // }
}

console.log(table);
