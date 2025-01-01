// Open Modal Function
export function openModalF(modalId, btnId) {
    const modal = document.getElementById(modalId)
    const btn = document.getElementById(btnId)

    btn.addEventListener('click', function () {
        modal.classList.add('active')
    })
}



// Close Modal Function
export function closeButtonF(modalId) {
    const closeButtons = document.querySelectorAll('.close-btn')
    const modal = document.getElementById(modalId)

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.classList.remove('active')
        })
    })
}


// Sidebar toggle function
export function toggleF(sidebarId, buttonId) {
    const sidebar = document.getElementById(sidebarId);
    const toggleBtn = document.getElementById(buttonId);
    const closeBtn = document.getElementById('close-mobile-sidebar')

    if (!sidebar || !toggleBtn) {
        console.error('Sidebar or Button not found. Check your IDs.');
        return;
    }

    // Add event listener to the button
    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        toggleBtn.classList.toggle('active');

    });

    if (closeBtn) {
        // close menu icon
        closeBtn.addEventListener('click', function () {
            if (sidebar.classList.contains('active')) {
                toggleBtn.classList.remove('active')
            }
            else {
                toggleBtn.classList.add('active')
            }
        })
    }
}





// Base function for updating quantity
export function updateQuantity(inputField, operation) {
    let currentValue = parseInt(inputField.value) || 0;

    // Increment or decrement based on the operation
    if (operation === 'increment' && currentValue < 9) {
        inputField.value = currentValue + 1;
    } else if (operation === 'decrement' && currentValue > 0) {
        inputField.value = currentValue - 1;
    }
}


// Search Dropdown
export function openSearchDropdown() {
    const input = document.getElementById('search-input')
    const dropdwon = document.getElementById('search-dropdown')
    const relatedItem = document.querySelector('.search-dropdown .related-items');

    const history = document.querySelector('.search-dropdown .history');

    input.addEventListener('focus', function () {
        dropdwon.classList.add('active')
        history.classList.add('active');
    })

    input.addEventListener('input', function () {
        if (input.value.trim() !== '') {
            if (history) {
                history.classList.remove('active');
            }
            relatedItem.classList.add('active');

        } else {
            relatedItem.classList.remove('active');
            history.classList.add('active');
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = dropdwon.contains(event.target) || input.contains(event.target);
        if (!isClickInside) {
            dropdwon.classList.remove('active'); // Close dropdown
            if (history) {
                history.classList.remove('active');
            }
            if (relatedItem) {
                relatedItem.classList.remove('active');
            }
        }

    });
}



export function deleteF(itemClass, btnsClass) {
    const items = document.querySelectorAll(itemClass)
    const btns = document.querySelectorAll(btnsClass)

    if (btns.length === 0 || items.length === 0) {
        console.error("No items or buttons found with the provided selectors.");
        return;
    }

    btns.forEach((btn, index) => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent any default behavior (if needed)
            event.stopPropagation();

            if (items[index]) {
                items[index].remove();
            } else {
                console.warn("No corresponding item found for this button.");
            }
        })
    })
}











// doropdown
function dropdwonToggle(wrapperId) {
    const wrapper = document.getElementById(wrapperId)
    const btns = wrapper.querySelectorAll('.nav-btn')
    // const dropdowns = wrapper.querySelectorAll('.dropdwon')

    btns.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            const dropdown = btn.querySelector('.dropdown');
            const icon = btn.querySelector('span')


            // Close all other dropdowns
            btns.forEach(otherBtn => {
                const otherDropdown = otherBtn.querySelector('.dropdown')
                const otherIcon = otherBtn.querySelector('span')

                if (otherDropdown != dropdown) {
                    otherDropdown.classList.remove('active')
                    otherIcon.classList.remove('active')
                }
            })
            // btns.forEach((otherBtn) => {
            //     const otherDropdown = otherBtn.querySelector('.dropdown');
            //     const otherIcon = otherBtn.querySelector('span');

            //     if (otherDropdown && otherDropdown !== dropdown) {
            //         otherDropdown.classList.remove('active');
            //         if (otherIcon) otherIcon.classList.remove('active');
            //     }
            // });


            if (dropdown) {
                // Toggle the 'active' class on the dropdown
                dropdown.classList.toggle('active');
                icon.classList.toggle('active')
            }
        })
    })
}


dropdwonToggle('category-sticky')