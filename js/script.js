$(document).ready(function () {
    $("#fitlight-hamburger-btn").click(function () {
        $(".hambuger-menu-content").addClass("hambuger-menu-content-isActive");
    });
    $(".fitlight-hamburger-close").click(function () {
        $(".hambuger-menu-content").removeClass("hambuger-menu-content-isActive");
    });
    $('.slick_slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
    });

    // Gets the video src from the data-src on each button
    $('.close').click(function () {
        $('#theVideo').get(0).pause();
    })
});