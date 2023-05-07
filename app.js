const board = document.getElementById("hello");

window.addEventListener("click", (event) => {
    const duck = new DuckBoy(event.clientX, event.clientY);
    board.appendChild(duck.elem);
});
