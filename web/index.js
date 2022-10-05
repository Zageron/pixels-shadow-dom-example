import init, { initialize, play } from "./bin/pixels-shadow-dom-example.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
    await init();
    const shadow = document.body.attachShadow({ mode: 'open' });

    let canvas = document.body.appendChild(document.createElement("canvas"));
    canvas.setAttribute('class', 'canvas');
    canvas.width = 320;
    canvas.height = 240;

    play(canvas);

    await delay(1);

    document.body.removeChild(canvas);
    let _shadow_canvas = shadow.appendChild(canvas);
    shadow.appendChild(document.createElement('p'));
}

main();
