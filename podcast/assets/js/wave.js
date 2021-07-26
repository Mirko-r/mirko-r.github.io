/*--------------------
Utility
--------------------*/
const lerp = (a, b, n) => (1 - n) * a + n * b;

/*--------------------
Setup
--------------------*/
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let time = 0;
const devicePixelRatio = window.devicePixelRatio || 1;
const w = 400;
const h = 400;
const simplex = new SimplexNoise();
const steps = 111;
const amplitude = 30;
const lines = 35;

/*--------------------
DrawLine
--------------------*/
const drawLine = (startY, t, seed) => {
    const step = w / steps;
    let x = -step;
    let y = 0;
    const arr = [];
    for (let i = 0; i <= steps; i++) {
        const n = simplex.noise2D(
            (time * 0.001 + seed + i) * 0.02,
            (startY + time * t) * 0.0003
        );
        x += step;

        let amp = Math.min(i, 40);
        if (i > steps - 40) amp = steps - i;
        y = startY + n * amp;
        arr.push({ x, y });
    }
    return arr;
};

/*--------------------
Clear
--------------------*/
const clear = () => {
    ctx.clearRect(0, 0, w, h);
};

/*--------------------
Draw
--------------------*/
const draw = () => {
    const p1 = drawLine(200, 1.1, 100);
    const p2 = drawLine(200, 1.3, 200);
    const p3 = drawLine(200, 1, 300);
    const p4 = drawLine(200, 1.2, 150);

    for (let r = 0; r <= lines; r++) {
        const h = Math.floor(130 + r + time * 0.01);
        ctx.strokeStyle = `hsla(${h}, 50%, 50%, .5)`;
        document.body.style.backgroundColor = `hsl(${h}, 40%, 90%)`;
        const s = 1 / lines;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
            const type = i === 0 ? "moveTo" : "lineTo";
            const x = lerp(p1[i].x, p2[i].x, r * s);
            const y = lerp(p1[i].y, p2[i].y, r * s);
            ctx[type](x, y);
        }
        ctx.stroke();
    }

    for (let r = 1; r <= lines; r++) {
        const h = Math.floor(130 + lines + r + time * 0.01);
        ctx.strokeStyle = `hsla(${h}, 50%, 50%, .5)`;
        document.body.style.backgroundColor = `hsl(${h}, 40%, 90%)`;
        const s = 1 / lines;
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
            const type = i === 0 ? "moveTo" : "lineTo";
            const x = lerp(p2[i].x, p3[i].x, r * s);
            const y = lerp(p2[i].y, p3[i].y, r * s);
            ctx[type](x, y);
        }
        ctx.stroke();
    }
};

/*--------------------
Animate
--------------------*/
const animate = () => {
    time = window.performance.now();
    clear();
    requestAnimationFrame(animate);

    draw();
};
animate();

/*--------------------
Resize
--------------------*/
const onResize = () => {
    canvas.width = w * devicePixelRatio;
    canvas.height = h * devicePixelRatio;
    canvas.style.width = `90%`;
    canvas.style.height = `${h}px`;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    ctx.strokeWidth = 1;
    animate();
};
onResize();

/*--------------------
Listeners
--------------------*/
window.addEventListener("resize", onResize);