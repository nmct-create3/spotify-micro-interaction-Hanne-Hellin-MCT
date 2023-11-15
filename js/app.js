const togglebutton = document.querySelector('.js-toggle');
console.log(togglebutton);

let toggle = function () {
    togglebutton.addEventListener('click', function () {
        const button = this;
        const isCheckVisible = button.classList.contains('show-check');
        console.log(isCheckVisible);

        if (isCheckVisible) {
            button.classList.remove('show-check');
            button.classList.add('show-add');
        } else {
            button.classList.remove('show-add');
            button.classList.add('show-check');
        }
    });
};

toggle();




// document.addEventListener('DOMContentLoaded', function () {
//     console.log('DOMContentLoaded');
//     toggle();
// });
