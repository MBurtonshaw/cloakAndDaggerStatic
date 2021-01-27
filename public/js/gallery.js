const gallery_pictures = [
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png",
    "../static/img/gallery_10-26_1.png"
];

//LOOP TO POPULATE PAGE W PHOTOS//
$("#gallery_container").append("<div id='img_container'></div>");
for (let i = 1; i <= gallery_pictures.length; i++) {
    const an_image = document.createElement("img");
    $("#img_container").append(an_image);
    an_image.id = i;
    an_image.src =
        "../static/img/gallery_10-26_" + parseInt(an_image.id) + "_thumbnail" + ".png";
    an_image.classList.add("gallery_pics");
    if (window.innerWidth > 700) {
        an_image.classList.add("thumbnail_pics");
    }
}
//FUNCTION THAT ENLARGES PHOTOS WHEN CLICKED//
$(".gallery_pics").click(e => {
    $("#img_container_2").html(
        "<div id='x_div'><img id='xxx' src='../static/img/mobile_x.png'></div>" +
            "<img id='been_clicked' class='clickable_large' src=''>"
    );
    $("#been_clicked").attr(
        "src",
        "../static/img/gallery_10-26_" + e.currentTarget.id + ".png"
    );
    $("#img_container").hide();
    $("#seven").hide();
    $("#img_container_2").show();
});
//FUNCTION THAT HIDES ENLARGED IMAGE WHEN CLICKED//
$("#img_container_2").click(e => {
    $("#img_container_2").hide();
    $("#img_container").show();
    $("#seven").show();
    $("#img_container_2").html(
        "<img id='been_clicked' class='clickable_large' src=''>"
    );
});

$("#1").addClass("big_pics");
$("#2").addClass("thin_pics");
$("#3").addClass("big_pics");
$("#4").addClass("thin_pics");
$("#5").addClass("big_pics");
$("#6").addClass("big_pics");
$("#7").addClass("big_pics");
$("#8").addClass("big_pics");
$("#9").addClass("big_pics");
$("#10").addClass("big_pics");
$("#11").addClass("big_pics");
$("#12").addClass("thin_pics");
$("#13").addClass("big_pics");
$("#14").addClass("thin_pics");

if (window.innerWidth < 1200) {
    $("#2").addClass("big_pics");
    $("#2").removeClass("thin_pics");
    $("#2").attr("src", "../static/img/gallery_10-26_2_thumbnail_wide.png");

    $("#4").addClass("big_pics");
    $("#4").removeClass("thin_pics");
    $("#4").attr("src", "../static/img/gallery_10-26_4_thumbnail_wide.png");

    $("#12").hide();

    $("#14").addClass("big_pics");
    $("#14").removeClass("thin_pics");
    $("#14").attr("src", "../static/img/gallery_10-26_14_thumbnail_wide.png");
}
