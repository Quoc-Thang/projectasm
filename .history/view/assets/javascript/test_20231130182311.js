let a, b;
var n;
let c = "";

for (let i = 0; i < n; i++) {
  a = n / 2;
  b = a % 2;
  c += b;
  if (a == 1) {
    c += 0;
  }
}
n = 10;
console.log(c);
