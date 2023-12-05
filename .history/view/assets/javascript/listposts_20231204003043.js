// Số lượng ký tự tối đa bạn muốn giới hạn
var maxLength = 50;

// Lấy nội dung văn bản
var text = document.querySelector("desc-content-post").innerText;

// Kiểm tra độ dài của văn bản và giới hạn nó
if (text.length > maxLength) {
  var truncatedText = text.substring(0, maxLength);
  document.getElementById("myText").innerText = truncatedText + "...";
}
