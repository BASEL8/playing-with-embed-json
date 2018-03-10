$(document).ready(function() {
    $('.scrollspy').scrollSpy();
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
        $('.nav-items').toggleClass('show');
    })
    $('#nav_item_list li').click(function() {
        $('.nav-items').toggleClass('show');
        $('#nav-icon1').toggleClass('open');
    })


});