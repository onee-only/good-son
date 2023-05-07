const words = ["I love you!", "Thank you so much!"];

const DUCK_ASCII = [
    `  _
>(·)__ 
 (___/`,
    `  _     
=(·)__ 
 (___/`,
];

for (i in DUCK_ASCII) {
    DUCK_ASCII[i] = DUCK_ASCII[i].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br>");
}

class DuckBoy {
    state = 0;

    constructor(x, y) {
        this.elem = document.createElement("div");
        this.elem.style.position = "fixed";
        this.elem.style.cursor = "pointer";
        this.elem.style.top = `${y - 40}px`;
        this.elem.style.left = `${x - 40}px`;
        this.elem.addEventListener("click", this.showText.bind(this));

        this.change();
        this.changeID = setInterval(this.change.bind(this), 500);
        this.moveID = setInterval(this.move.bind(this), 200);
    }

    change() {
        this.elem.innerHTML = DUCK_ASCII[this.state];

        if (this.state == 1) this.state = 0;
        else this.state++;
    }

    move() {
        const leftPad = parseInt(this.elem.style.left.replace("px", ""));

        if (leftPad + 70 <= 0) {
            clearInterval(this.changeID);
            clearInterval(this.moveID);
            board.removeChild(this.elem);
            this.elem = undefined;
            return;
        }

        this.elem.style.left = `${leftPad - Math.random() * 5 + 1}px`;
    }

    showText(event) {
        event.stopPropagation();
        const p = document.createElement("p");
        p.innerText = words[Math.floor(Math.random() * words.length)];

        const leftPad = parseInt(this.elem.style.left.replace("px", ""));
        const topPad = parseInt(this.elem.style.top.replace("px", ""));

        p.style.position = "fixed";
        p.style.textAlign = "center";
        p.style.top = `${topPad - 80}px`;
        p.style.left = `${leftPad - 50}px`;

        board.appendChild(p);

        setTimeout(() => {
            board.removeChild(p);
        }, 3000);
    }
}
