// Func add scroll to page
$(document).ready(function () {
    var executed = false;
    return $(window).scroll(function(){
        if (!executed) {
            $("body").append('<a href="#top" id="scroll_top" title="Up"><svg class="arrow-top" viewBox="0 0 5 9"><path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z" /></svg></a>');
        }
        executed = true; // code done. Stop func
    });
});
// Function scroll to top
$(window).scroll(function(){
	if($(window).scrollTop() > 50) {
        $(function(Showscroll){
            $('#scroll_top').show();
            $('#scroll_top').css({"display": "flex"},);
        });
	} 
    else if ($(this).scrollTop() < 50) {
		$('#scroll_top').hide();
	} 
    // Check page reboot
    else if (window.innerHeight > 50) {
        return Showscroll();
    }
});