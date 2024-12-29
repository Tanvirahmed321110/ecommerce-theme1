import { openModalF, closeButtonF, updateQuantity, openSearchDropdown, deleteF } from './utilitis.js';


// call open modal F
openModalF('shopping-cart', 'shopping-cart-btn')
openModalF('login-register', 'user-btn')
openModalF('notification-modal', 'notification-btn')
// open  mobile sidebar
openModalF('mobile-sidebar', 'mobile-menu-icon')



// close modal
closeButtonF('shopping-cart')
closeButtonF('login-register')
closeButtonF('notification-modal')
// close mobile sidebar
closeButtonF('mobile-sidebar')





// setup quantity
function setupQuantityButtons() {
    const allCartItems = document.querySelectorAll('.shopping-cart .item');

    allCartItems.forEach((item) => {
        const plusButton = item.querySelector('.plus-btn');
        const minusButton = item.querySelector('.minus-btn');
        const inputField = item.querySelector('.input-field');

        // Add event listener for the plus button
        plusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'increment');
        });

        // Add event listener for the minus button
        minusButton.addEventListener('click', function () {
            updateQuantity(inputField, 'decrement');
        });
    });

}

// Call setupQuantityButtons
setupQuantityButtons();

function updateCartItemCount() {
    const totalCartItem = document.querySelectorAll('.shopping-cart .item');
    document.getElementById('total-cart-item').innerText = totalCartItem.length;
}
updateCartItemCount()



// cart item delete
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
                updateCartItemCount()
            }
        });
    });
}

// Call setupDeleteButtons
setupDeleteButtons();











// Login modal and register
const loginBtn = document.getElementById('login-btn');
if (loginBtn) {
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.querySelector('.login-register .sign-in');
    const registerForm = document.querySelector('.login-register .sign-up');

    loginBtn.addEventListener('click', function () {
        loginForm.classList.add('active');
        registerForm.classList.add('active');
    });

    registerBtn.addEventListener('click', function () {
        loginForm.classList.remove('active');
        registerForm.classList.remove('active');
    });
}




// open a search dropdown
openSearchDropdown()
//delete single history
deleteF('.history .single-history', '.history .close-history')
