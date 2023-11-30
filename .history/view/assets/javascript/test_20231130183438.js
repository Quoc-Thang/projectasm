let a, b;
var n;
let c = "";
let d = n % 2;

for (let i = 0; i < n; i++) {
  a = n / 2;
  //   b = a % 2;
  for (let j = a % 2; j < n; j++) {
    c = `${d}${j}`;
    if (a == 1) {
      c = `${c}0`;
    }
  }
}
n = 10;
console.log(c);
console.log(typeof c);
