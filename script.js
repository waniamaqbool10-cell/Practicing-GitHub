// --- Cart Logic ---
let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart!");
  console.log("Cart:", cart);
}

// --- Search Functionality ---
function searchProducts() {
  const input = document.querySelector("input[type='search']").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Attach search function to form
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload
  searchProducts();
});
