const ojo_1 = document.getElementById(`ojo-1`);
const ojo_2 = document.getElementById(`ojo-2`);
const pupila_1 = document.getElementById(`pupila-1`);
const pupila_2 = document.getElementById(`pupila-2`);

setInterval(() => {
    ojo_1.classList.toggle(`active`)
    ojo_2.classList.toggle(`active`)
    pupila_1.classList.toggle(`active`)
    pupila_2.classList.toggle(`active`)
}, 2000);