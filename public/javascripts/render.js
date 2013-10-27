$( document ).ready(function() {
	var data = $("#myproject").text();
	console.log(data);
	$('#myproject').html(marked(data));
});