$(document).ready(function(){
    $('.cd-3d-nav-trigger').click(function(){
        window.scrollTo(0, 0);
        $('.cd-header, .cd-3d-nav-container, main').toggleClass('nav-is-visible');
    })

    $('.cd-3d-nav').on('click', 'a', function(){
        $(this).parent('li').addClass('cd-selected').siblings('li').removeClass('cd-selected');
        $('.cd-header, .cd-3d-nav-container, main').toggleClass('nav-is-visible');

    })


});