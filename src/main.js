import './style.css'

const dialog = document.getElementById('dialogDemo');
// const dialog2 = document.getElementById('dialogThanks');
document.querySelectorAll('[data-demo]').forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.preventDefault();
        if (dialog && typeof dialog.showModal === 'function') {
            dialog.showModal();
        } else {
            console.warn('Dialog element not found or not a <dialog>.');
        }
    })
});
document.querySelectorAll('.close').forEach((item) => {
    item.addEventListener('click', (ev) => {
        ev.preventDefault();
        dialog.close();
    })
});