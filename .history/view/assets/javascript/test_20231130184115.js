var n;

for (let i = 0; i < n; i++) {
  let a = n / 2;
  let b = a % 2;
  let c = n % 2;
  var d = `${c}${b}`;
}

n = 10;
console.log(d);
console.log(typeof d);
