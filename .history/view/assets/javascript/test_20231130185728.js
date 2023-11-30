var n = 10;
var conlai = n % 2;
var ketqua = `${conlai}`;

for (let i = 0; i < n; i++) {
  var thuongso = n / 2;
  var conlaiC = thuongso % 2;
  if (thuongso == 1) {
    ketqua = `${ketqua}`;
  }
}
