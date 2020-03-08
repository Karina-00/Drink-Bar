function receipt() {
    let totalPrice = document.querySelector('.total-price');
    let sum = 0;
    let cup = document.querySelectorAll('.glass');
    cup.forEach(cup => {
        let children = cup.children;
        let currentPrice = Number(children[1].innerHTML.slice(0, -1));
        sum += currentPrice;
        totalPrice.innerHTML = `Total price: ${sum}$`;
    });
    cup.forEach(cup => {
        let children = cup.children;
        let drinkName = children[0];
        let currentPrice = Number(children[1].innerHTML.slice(0, -1));
        if (currentPrice !== 0) {
            totalPrice.innerHTML += `<li>${drinkName.innerHTML}: ${currentPrice}$</li>`;
        }
    });
}

function fillCup() {
    let level = Number(this.getAttribute('level'));
    let children = this.children;
    let drinkName = children[0];
    console.log(drinkName.innerHTML);
    let currentPrice = children[1];
    let price = Number(this.getAttribute('price'));

    if (level < 66) {
        level += 22;
        this.style.backgroundPosition = `0 ${level}%`;
        this.setAttribute('level', level);
        currentPrice.innerHTML = String((level / 88) * price) + '$';
    } else if (level === 66) {
        level += 22;
        this.style.backgroundPosition = `0 ${level}%`;
        this.setAttribute('level', level);
        currentPrice.innerHTML = String((level / 88) * price) + '$';
        //add tooltip
        this.setAttribute('data-toggle', 'tooltip');
        this.setAttribute('data-placement', 'top');
        this.setAttribute('title', 'Click to pour your drink out');
    } else if (level == 88) {
        while (level >= 22) {
            level = level - 22;
            this.style.backgroundPosition = `0 ${level}%`;
            this.setAttribute('level', level);
            currentPrice.innerHTML = '0$';
            // remove the tooltip
            this.setAttribute('title', '');
        }
    }
    receipt();
}

// event listeners

let cup = document.querySelectorAll('.glass');
cup.forEach(cup => {
    cup.addEventListener('click', fillCup);
});

let payButton = document.getElementById('pay-btn');
payButton.addEventListener('click', a => {
    let totalPrice = document.querySelector('.total-price');
    if (totalPrice.innerHTML === 'Total price: 0$') {
        let finalMessage = document.querySelector('.final-message');
        finalMessage.innerHTML =
            'You haven\'t ordered anything <img src="assets/sad.png"> Go back and make an order <img src="assets/heart.svg" />';
        let nextBtn = document.getElementById('repeat');
        if (screen.width < 420) {
            nextBtn.style.top = '400px';
        } else {
            nextBtn.style.top = '508px';
        }
        nextBtn.innerHTML = 'Make an order';
        let newLayer = document.querySelector('.darken-background');
        newLayer.classList.add('show');
    } else {
        let newLayer = document.querySelector('.darken-background');
        newLayer.classList.add('show');
    }
});

let nextOrder = document.getElementById('repeat');
nextOrder.addEventListener('click', a => {
    let goBack = document.querySelector('.darken-background');
    goBack.classList.remove('show');
    location.reload();
    window.scrollTo(0, 0);
});
