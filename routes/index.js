var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var corgiName = ["Snuffle Kisses", "Dinoruff", "Princess Boo Butt" ];
	var corgiAge = ["2 years, 3 months", "8 years, 1 month", "6 months"];
	var picture = ["http://25.media.tumblr.com/tumblr_mcqs9lohUB1rfwrijo1_500.jpg", "http://www.thedebutanteball.com/wp-content/uploads/2014/10/OtisJurassicPark2.jpg", "http://s-ak.buzzfed.com/static/enhanced/terminal01/2010/8/3/17/enhanced-buzz-13790-1280869492-13.jpg"];
	var blurb = ["I'm a lover, not a hater, let my smooches move you.", "Yeah, that's right. I'm a movie star. A/S/L plz.", "Looking for someone who can handle a purebred princess."];

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