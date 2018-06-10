$(document).ready(function () {
	// Функционал для адаптивной шапки сайта
    var trigger = $('.button--toggle'),
        menu = $('.main-menu'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == false) {
            menu.removeClass('is-closed');
            menu.addClass('is-open');
            isClosed = true;
        } else {
            menu.removeClass('is-open');
            menu.addClass('is-closed');
            isClosed = false;
        }
    }
});