function mobile() {
    $("#change_css").attr("href", "../static/stylesheets/mobile.css");
    $("#one_menu_div").html(
        "<a id='one_menu_a'><img src='../static/img/mobile_menu_icon.png' id='one_menu_img'></a>"
    );
    $("#one_menu_div").on("click", () => {
        $("#container").addClass("clicker");
        $("#container").html(
            "<div id='divvest'>" +
                "<h2 class='mobile_menu' id='mobile_menu'><a href='menu'>" +
                "MENU" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_about'><a href='videos'>" +
                "VIDEOS" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_gallery'><a href='gallery'>" +
                "GALLERY" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_contact'><a href='contact'>" +
                "CONTACT" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_takeout'><a target='_blank' href='https://app.upserve.com/s/cloak-and-dagger-cocktail-lounge-lakewood'>" +
                "TAKEOUT" +
                "</a></h2>" +
                "</div>" +
                "<div id='closer_div'>" +
                "<img id='closer' src='../static/img/mobile_x.png'>" +
                "</div>"
        );
        $("#container").css("background-color", "rgb(173, 129, 86");
        $("body").css("background-color", "rgb(173, 129, 86)");
        $("#closer_div").on("click", () => {
            location.reload();
        });
    });
    $("#video_div").html(
        `<div class="vid_grid">
                <iframe
                    class="video"
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/462777172"
                    width="450"
                    height="225"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="vid_grid">
                <iframe
                    class="video"
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/462771903"
                    width="450"
                    height="225"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="vid_grid">
                <iframe
                    class="video"
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/465080849"
                    width="450"
                    height="225"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="vid_grid">
                <iframe
                    class="video"
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/478987668"
                    width="450"
                    height="225"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>`);
}

function desktop() {
    $("#change_css").attr("href", "");
    $("#change_css").attr("href", "../static/stylesheets/style.css");
}

if (window.innerWidth > 850) {
    desktop();
}
if (window.innerWidth < 850) {
    mobile();
}
if (window.innerWidth < 500) {
        $("#video_div").html(
            `<div class="vid_grid">
                    <iframe
                        class="video"
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/462777172"
                        width="300"
                        height="150"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="vid_grid">
                    <iframe
                        class="video"
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/462771903"
                        width="300"
                        height="150"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="vid_grid">
                    <iframe
                        class="video"
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/465080849"
                        width="300"
                        height="150"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <div class="vid_grid">
                    <iframe
                        class="video"
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/478987668"
                        width="300"
                        height="150"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
        </div>`);
}


            