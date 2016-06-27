$( document ).ready(function() {
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data){
	  	getUserData(data);
	  }
	});

	function getUserData(data) {
		var t = "<p> Nombre: " + data.results[0].name.title + " " + data.results[0].name.first 
		+ " " + data.results[0].name.last + " </p> <br/>"
		+ "<img src='"+ data.results[0].picture.large + "' />";
		$('#oeoe').append(t);
	}
});


