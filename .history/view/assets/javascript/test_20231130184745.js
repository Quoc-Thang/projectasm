var n;
let c = n % 2;
var d = `${c}`;

for (let i = 0; i < n; i++) {
  let a = n / 2;
  let b = a % 2;
  d += b;
  if (a == 1) {
    d += "0";
  }
}

n = 10;

const e = d.sort().reverse();
console.log(e);
console.log(typeof e);
