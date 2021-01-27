let count = 0;

const menu = [
    "../static/img/menu_png/CD_Menu_Spreads_1-11-1.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-2.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-3.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-4.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-5.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-6.png",
    "../static/img/menu_png/CD_Menu_Spreads_1-11-7.png"
];

function showPage() {
    for (let i = 0; i < menu.length; i++) {
        if (i === count) {
            if (i === 0) {
                $("#menu_div").html(
                    "<div id='first_div'><img class='menu first' src=" +
                        menu[0] +
                        "></div>"
                );
            } else {
                $("#menu_div").html(
                    "<div><img class='menu' src=" + menu[i] + "></div>"
                );
            }
        }
    }
}
showPage();
//Show prev page
function showPrevPage() {
    if (count < 1) {
        return;
    }
    count--;
    console.log(count);
    showPage();
}

//Show next page
function showNextPage() {
    if (count >= 6) {
        return;
    }
    count++;
    showPage();
}

//Button events
document.querySelector("#prev-page").addEventListener("click", () => {
    showPrevPage();
});
document.querySelector("#next-page").addEventListener("click", () => {
    showNextPage();
});

if (window.innerWidth < 900) {
    $("#container").html(
        "<div id='menu_div'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-1.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-2.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-3.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-4.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-5.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-6.png'>" +
            "<img class='menu' src='../static/img/menu_png/CD_Menu_Spreads_1-11-7.png'>" +
            "</div>"
    );
    $("#prev-page").remove();
    $("#next-page").remove();
}
