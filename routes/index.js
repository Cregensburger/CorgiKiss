var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	$(document).ready(function() {
	    $('#search').on('submit', function() {
	        event.preventDefault();
	        //Here we want to call on the corgi table
	        //once called, will pull out data within to
	        //appropriate bits and fill in the spaces of app.
	        //$.getJSON("url/to/corgi/json/file", function(data){
	        // 	$.each(data, function(index, element){
	        // 		console.log(element.items.url);
	        // 	});
	        // });
	        jaxify(corgi);
	    });    

	    function jaxify(corgi){
	        $.ajax({
	            type: 'get',
	            //get mongodb corgi.picture(url)
	            picture: picture,
	            dataType: 'json',
	            success: function(data, status, jqXHR) {


	                $('#results').append(html);
	            },
	        });
	    }

	    $('#results').on('click', '.confirm', function() {
	        var corgiLikey = $(this).val();
	        jaxify(corgi);
	    });

	    function init(data) {
	            return data.data[
	                Math.floor(
	                    Math.random() * pictures.data.length
	                )
	            ].embed_url;
	    }
	});

	res.render('index', { title: 'KorgiKiss', name: name, picture: picture, blurb: blurb });
});

router.get('*', function(req, res, next) {
  res.render('error');
});

module.exports = router;