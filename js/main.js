$(document).ready(function () {
    // Activates tooltipster jQuery plugin
    $('.tooltip').tooltipster();
    // Settings for Final countdown jQuery plugin
    $('#getting-started')
    .countdown('2016/08/09', function (event) {
        $(this).text(
            event.strftime('%D days %H:%M:%S')
     );
    });
    // The following JavaScript code targets the TRANSMISSION ENCODER form and listens for the submit event,
    // interrupts the form's default submit function,
    // and then generates an HTML message that displays the form field input on the page below the form.
    var theForm = document.getElementById('contact');
    theForm.addEventListener('submit', function (eventInfo) {
        eventInfo.preventDefault();
        var myElement = document.createElement('div');
        myElement.innerHTML = '<h4>Your encrypted transmission has been successfully submitted.</h4>';
        document.getElementsByClassName('encoder')[0].appendChild(myElement);
    });
    // The following jQuery code targets the post class and listens for the hover event,
    // and then generates a new class called highlight that has been styled in main.css to
    // change the border color of the post class to white. The class is removed when hover ends.
    $('.post').hover(function () {
        $(this).addClass('highlight');
    }, function () {
        $(this).removeClass('highlight');
    });
});
