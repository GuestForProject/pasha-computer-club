function select(el) {
    const selected = el.classList.contains('c_seat');

    if (selected) {
        el.classList.remove('c_seat');
    } else {
        el.classList.add('c_seat');
    }
}