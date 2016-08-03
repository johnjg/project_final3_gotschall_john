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
    // The following code targets the contact form and listens for the submit event,
    // interrupts the form's default submit function,
    // and generates an HTML message that encorporates the form field input.
    var theForm = document.getElementById('contact');
    theForm.addEventListener('submit', function (eventInfo) {
        eventInfo.preventDefault();
        var myElement = document.createElement('article');
        myElement.innerHTML = '<h1>Your encrypted transmision has been successfully submitted.</h1>';
        document.getElementsByClassName('container')[0].appendChild(myElement);
    });
});
