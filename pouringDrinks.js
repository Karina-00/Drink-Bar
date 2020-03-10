function updateReceipt() {
    const totalPrice = document.querySelector('.total-price');
    let sum = 0;
    const cup = document.querySelectorAll('.glass');
    cup.forEach(cup => {
        const cupChildren = cup.children;
        const currentPrice = Number(cupChildren[1].innerHTML.slice(0, -1));
        sum += currentPrice;
        totalPrice.innerHTML = `Total price: ${sum}$`;
    });
    cup.forEach(cup => {
        const cupChildren = cup.children;
        const drinkName = cupChildren[0];
        const currentPrice = Number(cupChildren[1].innerHTML.slice(0, -1));
        if (currentPrice !== 0) {
            totalPrice.innerHTML += `<li>${drinkName.innerHTML}: ${currentPrice}$</li>`;
        }
    });
}

function pourDrink() {
    let level = Number(this.getAttribute('level'));
    const cupChildren = this.children;
    const currentPrice = cupChildren[1];
    const price = Number(this.getAttribute('price'));

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
        this.setAttribute('title', 'Click to pour your drink out');
    } else if (level === 88) {
        while (level >= 22) {
            level = level - 22;
            this.style.backgroundPosition = `0 ${level}%`;
            this.setAttribute('level', level);
            currentPrice.innerHTML = '0$';
            this.setAttribute('title', '');
        }
    }
    updateReceipt();
}

let cup = document.querySelectorAll('.glass');
cup.forEach(cup => {
    cup.addEventListener('click', pourDrink);
});
