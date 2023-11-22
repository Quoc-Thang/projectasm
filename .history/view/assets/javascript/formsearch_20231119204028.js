cardSearch = () => {
  const searchInput = document.getElementById("search-input"); // Loại bỏ dấu "#" ở đây
  const card = document.querySelector(".card-search");

  searchInput.addEventListener("focus", () => {
    // Sự kiện focus thay vì focusin
    card.style.display = "block";
  });

  searchInput.addEventListener("blur", () => {
    // Sự kiện blur thay vì focusout
    if (!searchInput.value.trim()) {
      // Kiểm tra giá trị của input sau khi trim khoảng trắng
      card.style.display = "none";
    }
  });
};

// Gọi hàm cardSearch để kích hoạt
cardSearch();
