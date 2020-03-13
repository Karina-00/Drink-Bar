const payButton = document.getElementById('pay-btn');
payButton.addEventListener('click', a => {
    const totalPrice = document.querySelector('.total-price');
    if (totalPrice.innerHTML === 'Total price: 0$') {
        const finalMessage = document.querySelector('.final-message');
        finalMessage.innerHTML =
            'You haven\'t ordered anything yet <img src="assets/sad.png"> Go back and make an order! <img src="assets/heart.svg" />';
        const nextBtn = document.getElementById('order-again');
        nextBtn.innerHTML = 'Make an order';
        nextBtn.classList.add('try-again');
        const newLayer = document.querySelector('.darken-background');
        newLayer.classList.add('show');
    } else {
        const newLayer = document.querySelector('.darken-background');
        newLayer.classList.add('show');
    }
});

const nextOrder = document.getElementById('order-again');
nextOrder.addEventListener('click', a => {
    const goBack = document.querySelector('.darken-background');
    goBack.classList.remove('show');
    location.reload();
    window.scrollTo(0, 0);
});
