var elements = document.querySelectorAll(".desc-content-post");

elements.forEach(function (element) {
  var maxLength = 50;
  var text = element.innerText;

  if (text.length > maxLength) {
    var truncatedText = text.substring(0, maxLength);
    element.innerText = truncatedText + "...";
  }
});
