$('.nav-link a, .index a, .banner-btn a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, "slow");
})
