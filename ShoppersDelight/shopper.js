window.addEventListener('load', function () {
    addToCart();
});

function addToCart() {
    let parent = document.querySelector('#addedCart');

    let btn1 = document.querySelector('#btn1');
    btn1.addEventListener('click', function () {
        console.log('run1')
        // let add = document.createElement('li');
        // parent.appendChild('add');
    });

    let btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', function () {
        console.log('run2')
    });

    let btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', function () {
        console.log('run3')
    });

    let btn4 = document.querySelector('#btn4');
    btn4.addEventListener('click', function () {
        console.log('run4')
    });

    let btn5 = document.querySelector('#btn5');
    btn5.addEventListener('click', function () {
        console.log('run5')
    });

    let btn6 = document.querySelector('#btn6');
    btn6.addEventListener('click', function () {
        console.log('run6')
    });
}