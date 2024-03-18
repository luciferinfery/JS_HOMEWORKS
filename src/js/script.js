function createTable() {
  const table = document.createElement('table');

  for (let i = 0; i < 10; i += 1) {
    const row = table.insertRow();
    for (let j = 0; j < 10; j += 1) {
      const cell = row.insertCell();
      cell.textContent = i * 10 + j + 1;
    }
  }

  document.body.appendChild(table);
}

//
// function createTableBadOption() {
//   const table = document.createElement('table');
//
//   for (let i = 0; i < 10; i += 1) {
//     // const row = table.insertRow();
//     const tr = document.createElement('tr');
//     table.appendChild(tr);
//
//     for (let j = 0; j < 10; j += 1) {
//       const cell = document.createElement('td');
//       cell.textContent = i * 10 + j + 1;
//       tr.appendChild(cell);
//     }
//   }
//
//   document.body.appendChild(table);
// }
//
// const timeStart1 = performance.now();
// createTableBadOption();
//
// console.log('Time spent 1', performance.now() - timeStart1);
//
// const timeStart2 = performance.now();
createTable();
//
// console.log('Time spent 2', performance.now() - timeStart2);
