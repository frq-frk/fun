$(document).ready(() => {

    $('.intro h5').fadeIn(1000, () => {
        $('.intro h4').fadeIn(1000, () => {
            $('.intro h2').slideDown(1000,() => {
                $('#cv-link').fadeIn(1000);
            });
        })
    });

})

function toggleNav(e){
    $('#nav').toggle(400);
}
