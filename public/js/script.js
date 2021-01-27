function myFn() {
    if (clock >= 6 && clock <= 11) {
        $("#three_img").attr("src", "../static/img/slideshow_2.png");
    }
}

function myFn2() {
    if (clock >= 12 && clock <= 17) {
        $("#three_img").attr("src", "../static/img/slideshow_1.png");
    }
}

function myFn4() {
    if (clock >= 18 && clock <= 23) {
        $("#three_img").attr("src", "../static/img/slideshow_3.png");
    }
}

function myFn5() {
    if (clock >= 24 && clock <= 29) {
        $("#three_img").attr("src", "../static/img/slideshow_4.png");
    }
}

function myFn3() {
    if (clock >= 0 && clock <= 5) {
        $("#three_img").attr("src", "../static/img/slideshow_5.png");
    }
}

let clock = 0;
console.log(window.innerWidth);
function timer() {
    clock += 1;
    if (clock === 30) {
        clock = -1;
        clock += 1;
    }

}

setInterval(timer, 1000);

setInterval(myFn, 1000);
setInterval(myFn2, 1000);
setInterval(myFn3, 1000);
setInterval(myFn4, 1000);
setInterval(myFn5, 1000);

for (let i = 0; i < 1; i++) {
    if (clock === 30) {
        clearInterval(timer);
        clearInterval(myFn);
        clearInterval(myFn2);
        clearInterval(myFn3);
        clearInterval(myFn4);
        clearInterval(myFn5);
        setInterval(timer, 1000);
    }

    setInterval(myFn, 1000);
    setInterval(myFn2, 1000);
    setInterval(myFn3, 1000);
    setInterval(myFn4, 1000);
    setInterval(myFn5, 1000);
}
