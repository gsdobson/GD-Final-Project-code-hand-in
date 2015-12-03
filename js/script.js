
// function textView(){
//     $('.textview').hide();
//   });
// }




function imageView() {

	$('.pictureview').show();
	$('#textview').hide()
	event.preventDefault();
}

$('#picture').click(function(){
    imageView();
});


function textView() {

	$('.pictureview').hide();
	$('#textview').show()
	event.preventDefault();
}

$('#text').click(function(){
    textView();
});