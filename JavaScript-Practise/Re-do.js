let i;
let j;
let n = 5;

for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= 5; j++) {
    if (i == 1 || i == 5 || j == 1 || j == 5 || i / j == 1 || i * j == n + 3) {
      row = row + "* ";
    } else {
      row = row + "  ";
    }
  }

  console.log(row);
}
