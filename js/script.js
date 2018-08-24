/*CAROUSEL INIT*/
var carousel_interval = 3000;
$('.carousel').carousel({fullWidth: true,dist:0,indicators:true});

var interval;
function run(){
	interval = setInterval(function(){ 
	//	$('.carousel').carousel('next');
	}, carousel_interval);
}
function stop(){
	clearInterval(interval);
}
run();
$('.carousel').hover(stop, run);     

$('.scrollspy').scrollSpy({scrollOffset:0});

$('body').click(function(e) {   
    if($(e.target).parents('#carousel').length == 0){
    	 e.stopPropagation(); 
   } 
});

$('.carousel-item a').click(function(target) {   
	console.log($(this).find("h2").html());
});


/*MAIL*/
$("#contactForm").submit(function (event) {
	event.preventDefault(); 
	var formData = $(this).serialize();
	console.log(formData);
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: formData,
		success: function(response) { 
			Materialize.toast('Message sent successfully :)', 4000) // 4000 is the duration of the toast
		},
		error: function(xhr, status, error){
			console.log("error: " , xhr); 
			Materialize.toast('Error: Message was not sent successfully :(', 4000) // 4000 is the duration of the toast
		}
	});
});
