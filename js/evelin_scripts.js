// Import styles
// import '/styles/jk_parcel.scss'; // Comment, if don't use parcel
// Define Jquery (If you dont' use node.js comment this lines)
// var jquery = require("jquery"); window.$ = window.jQuery = jquery;  
// var bootstrap = require("bootstrap"); 
// Function to switch navigation class to fixed on scroll
// and change the position of the modal window
$(window).scroll(function(){
        if($(this).scrollTop()>10){
            $(function(Showmenu){
                $('.header').addClass('__scroll');
                $('.modal-dialog').addClass('modal-dialog-center');
            });
        }
        else if ($(this).scrollTop()<10) {
            $('.header').removeClass('__scroll');
            $('.modal-dialog').removeClass('modal-dialog-center');
        }
        // Check page reboot
        else if (window.innerWidth > 10) {
            return Showmenu();
        }
    });
// Function of add button of menu on width < 201px (Work, ONLY if you load page with this width)
// and form .e-name block interactive
$(document).ready(function() {
    if (window.innerWidth < 295) {
            $(".menu").prepend('<a class="page-link __bg-dark-menu"><i class="fa-solid fa-bars"></i> MENU</a>');
            $(".menu").addClass("menu__active");
        // Add class, if mouse over menu__active block
        $('.menu__active').mouseover(function() {
            $('.nav-items a').addClass('page-link __bg-dark-menu');
        });
    }
    // Function rename default value and add interacive
        $(function(Ename_active){ 
            $('.e-name').val('Enter email');
                // Clear value functions
                $('.e-name').click(function(){
                    $(this).val('');
                });
        });
});
// Function show message, if click on fb logo.
$(document).ready(function() {
    $('.fb_logo, .facebook_logo').click(function() { 
        alert('This is just fb logo from layout. I don"t have fb.');
    });
});
// Function scroll to top
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
            $('#scroll_top').css({"display": "flex"},);
		} else {
			$('#scroll_top').hide();
		}
	});
    // If click on h1, page scroll to top
	$('#scroll_top'), $("h1").click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});