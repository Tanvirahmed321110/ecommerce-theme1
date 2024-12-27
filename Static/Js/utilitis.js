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
