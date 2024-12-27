
const shoppingCartBtn = document.getElementById('shopping-cart-btn')
const shoppingCart = document.querySelector('.my-modal.shopping-cart')
const loginRegisterClose = document.querySelector('.login-register .modal-close-btn')


// Open Modal Function
function openModalF(modalId, btnId) {
    const modal = document.getElementById(modalId)
    const btn = document.getElementById(btnId)

    btn.addEventListener('click', function () {
        modal.classList.add('active')
    })
}



// call open modal F
openModalF('shopping-cart', 'shopping-cart-btn')
openModalF('login-register', 'user-btn')



// Close Modal Function
function closeButtonF(modalId) {
    const closeButtons = document.querySelectorAll('.close-btn')
    const modal = document.getElementById(modalId)

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.remove('active')
        })
    })
}
closeButtonF('shopping-cart')
closeButtonF('login-register')






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





// login and registy
const loginBtn = document.getElementById('login-btn')
if (loginBtn) {
    const registerBtn = document.getElementById('register-btn')
    const loginForm = document.querySelector('.login-register .sign-in')
    const registerForm = document.querySelector('.login-register .sign-up')



    loginBtn.addEventListener('click', function () {
        loginForm.classList.add('active')
        registerForm.classList.add('active')
    })
    registerBtn.addEventListener('click', function () {
        loginForm.classList.remove('active')
        registerForm.classList.remove('active')
    })
}
