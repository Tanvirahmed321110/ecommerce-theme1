import { openModalF, closeButtonF, updateQuantity, openSearchDropdown, deleteF, toggleF, activeF } from './utilitis.js';


// call open modal F
openModalF('shopping-cart', 'shopping-cart-btn')
openModalF('login-register', 'user-btn')
openModalF('notification-modal', 'notification-btn')
// open  mobile sidebar
toggleF('mobile-sidebar', 'mobile-menu-icon');
// for department
toggleF('all-department-sidebar', 'all-department-btn')



// color and size
activeF('.colors li')
activeF('.size li')


// update qty
function updateQty() {
    const inputQuantity = document.getElementById('input-quantity')

    document.getElementById('plus-btn').addEventListener('click', function () {
        updateQuantity(inputQuantity, 'increment')
        console.log('click')
    })
    document.getElementById('minus-btn').addEventListener('click', function () {
        updateQuantity(inputQuantity, 'decrement')
    })
}
updateQty()



// close modal
closeButtonF('shopping-cart')
closeButtonF('login-register')
closeButtonF('notification-modal')
// close mobile sidebar
closeButtonF('mobile-sidebar')



// Qlick view
const productCarts = document.querySelectorAll('.product-cart');

if (productCarts) {
    productCarts.forEach((cart) => {
        const firstHideIcons = cart.querySelectorAll('.hide-icons .hide-icon:first-child');
        const productModal = document.getElementById('product-modal')

        firstHideIcons.forEach(btn => {
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                productModal.classList.add('active')
            })
        })

        closeButtonF('product-modal')
    });
}




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






// accordion
function accordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const content = accordionItem.querySelector('.accordion-content');
            const isActive = header.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.height = '0';
                h.nextElementSibling.style.opacity = '0';
            });

            // Toggle the current item
            if (!isActive) {
                header.classList.add('active');
                content.style.height = '100px'; // Use scrollHeight to smoothly expand
                content.style.opacity = '1';
            } else {
                header.classList.remove('active');
                content.style.height = '0'; // Collapse the section
                content.style.opacity = '0';
            }
        });
    });
}

accordion()