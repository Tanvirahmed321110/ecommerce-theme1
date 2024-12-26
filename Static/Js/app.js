
const shoppingCartBtn = document.getElementById('shopping-cart-btn')
const shoppingCart = document.querySelector('.my-modal.shopping-cart')

// Open Modal Function
function openModalF(parent) {
    shoppingCartBtn.addEventListener('click', function () {
        parent.classList.add('active')
        console.log(parent)
    })
}
openModalF(shoppingCart)


// Close Modal Function
function closeButtonF(parent) {
    const closeButtons = document.querySelectorAll('.close-btn')

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            parent.classList.remove('active')
        })
    })
}
closeButtonF(shoppingCart)






// Delete Button Functionality
function setupDeleteButtons() {
    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.shopping-cart .delete-btn');

    deleteButtons.forEach((button) => {
        button.addEventListener('click', function () {
            // Find the parent cart item ('.item') and remove it
            const cartItem = button.closest('.item');
            if (cartItem) {
                cartItem.remove();

                // Optionally update the total cart count
                updateCartCount();
            }
        });
    });
}




// Quantity update
function updateQuantity() {
    // Select all individual cart items
    const allCartItems = document.querySelectorAll('.shopping-cart .item'); // Adjust selector if needed

    allCartItems.forEach((item) => {

        // buttons and inputs
        const plusButton = item.querySelector('.plus-btn');
        const inputField = item.querySelector('.input-field');
        const minusButton = item.querySelector('.minus-btn');

        // Remove any existing event listeners (prevent duplication)
        plusButton.replaceWith(plusButton.cloneNode(true));
        minusButton.replaceWith(minusButton.cloneNode(true));

        // Add event listener for the plus button
        const newPlusButton = item.querySelector('.plus-btn');
        newPlusButton.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value) || 0;
            if (currentValue < 9) {
                inputField.value = currentValue + 1;
            }
        });

        // Add event listener for the minus button
        const newMinusButton = item.querySelector('.minus-btn');
        newMinusButton.addEventListener('click', function () {
            let currentValue = parseInt(inputField.value) || 0;
            if (currentValue > 0) {
                inputField.value = currentValue - 1;
            }
        });
    });
}



// Function to update total cart count (optional)
function updateCartCount() {
    const totalCartItems = document.querySelectorAll('.shopping-cart .item').length;
    document.getElementById('total-cart-item').innerText = totalCartItems;
}



// Total Cart Item
document.getElementById('total-cart-item').innerText = document.querySelectorAll('.shopping-cart .item').length;
// call
updateQuantity();
setupDeleteButtons()
