document.addEventListener("DOMContentLoaded", function () {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");
    let totalPrice = document.getElementById("totalPrice");

    function displayCart() {

        cartItems.innerHTML = "";

        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML =
                "<li class='list-group-item'>Cart is Empty</li>";

            totalPrice.innerText = "0.00";
            return;
        }

        cart.forEach((item, index) => {

            total += Number(item.price);

            let li = document.createElement("li");

            li.className =
                "list-group-item d-flex justify-content-between align-items-center";

            li.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    Price: $${item.price}
                </div>

                <button class="btn btn-danger btn-sm"
                        onclick="removeItem(${index})">
                    Remove
                </button>
            `;

            cartItems.appendChild(li);
        });

        totalPrice.innerText = total.toFixed(2);
    }

    window.removeItem = function (index) {

        cart.splice(index, 1);

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    };

    window.clearCart = function () {

        localStorage.removeItem("cart");

        cart = [];

        displayCart();
    };

    window.checkout = function () {

        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("✅ Order placed successfully!");

        localStorage.removeItem("cart");

        cart = [];

        displayCart();
    };

    displayCart();
});