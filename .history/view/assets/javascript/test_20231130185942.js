var n = 10;
var sodau = n % 2;
var ketqua = `${sodau}`;

for (let i = 0; i < n; i++) {
  var thuongso = n / 2;
  var conlai = thuongso % 2;
  ketqua += `${thuongso}`;
  if (thuongso == 1) {
    ketqua += `0`;
  }
}

console.log(ketqua);
console.log(typeof ketqua);
