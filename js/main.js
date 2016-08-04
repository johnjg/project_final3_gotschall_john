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
    // The following code targets the TRANSMISSION ENCODER form and listens for the submit event,
    // interrupts the form's default submit function,
    // and then generates an HTML message that displays the form field input on the page below the form.
    var theForm = document.getElementById('contact');
    theForm.addEventListener('submit', function (eventInfo) {
        eventInfo.preventDefault();
        var myElement = document.createElement('div');
        myElement.innerHTML = '<h4>Your encrypted transmission has been successfully submitted.</h4>';
        document.getElementsByClassName('encoder')[0].appendChild(myElement);
    });
});
