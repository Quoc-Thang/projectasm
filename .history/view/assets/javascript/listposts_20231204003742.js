// Số lượng ký tự tối đa bạn muốn giới hạn
var maxLength = 150;

// Lấy nội dung văn bản
var text = document.querySelectorAll(".desc-content-post").innerText;

// Kiểm tra độ dài của văn bản và giới hạn nó
if (text.length > maxLength) {
  var truncatedText = text.substring(0, maxLength);
  text = truncatedText + "...";
}
