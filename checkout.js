let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += Number(item.price);
});

document.getElementById("checkoutTotal").innerText =
    total.toFixed(2);

function placeOrder() {

    alert("✅ Order placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "product.html";
}
