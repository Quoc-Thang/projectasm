function decimalToBinary(decimalNumber) {
  // Chuyển đổi số thập phân sang nhị phân
  let binaryResult = (decimalNumber >>> 0).toString(2);

  return binaryResult;
}

// Sử dụng hàm với một số thập phân bất kỳ
let decimalNumber = 42;
let binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Số ${decimalNumber} ở dạng nhị phân là: ${binaryRepresentation}`);

const targetMinutes = 5;
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + targetMinutes);
const currentTime = new Date();
const timeDifference = endTime - currentTime;
