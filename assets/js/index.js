function reset(el, min, max, after) {
    let bar = Math.floor(Math.random() * (100 - 1) + 1);
    let val = Math.floor(Math.random() * (max - min) + min);

    el.classList.remove('bg-success');
    el.classList.remove('bg-danger');
    el.classList.remove('c_bg_orange');
    el.style.width = bar + '%';
    el.classList.add(bar > 0 && bar < 30 ? 'bg-success' : bar > 30 && bar < 80 ? 'c_bg_orange' : 'bg-danger');
    el.innerText = val + after;
}

function change_price() {
    let el = document.getElementById('c_price_bar');
    reset(el, 1000, 10000, ' руб.');
}

setInterval(() => {
    change_price();
}, 6000)