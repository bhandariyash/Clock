(function() {
	var r = 250;
	var distance1 = (0.134 * r) + 'px';
	var distance2 = (0.5 * r) + 'px';
	var radius = r + 'px';
			
	$("#circle").css({
		height : (2 * r) + 'px',
		width : (2 * r) + 'px'
	});
	$("#one").css({
		right : distance2,
		top : distance1
	});
	$("#two").css({
		right : distance1,
		top : distance2
	});
	$("#four").css({
		right : distance1,
		bottom : distance2
	});
	$("#five").css({
		bottom : distance1,
		right : distance2
	});
	$("#seven").css({
		bottom : distance1,
		left : distance2
	});
	$("#eight").css({
		left : distance1,
		bottom : distance2
	});
	$("#ten").css({
		left : distance1,
		top : distance2
	});
	$("#eleven").css({
		top : distance1,
		left : distance2
	});
	$(".hand").css({
		left : r + 'px'
	});
	$("#second").css({
		width : (0.8 * r) + 'px'
	});
	$("#minute").css({
		width : (0.75 * r) + 'px'
	});
	$("#hour").css({
		width : (0.4 * r) + 'px'
	});
			
	function showTime() {
		var time = new Date();		
		var millisecsPassedThisDay = time.getMilliseconds() + 1000 * (time.getSeconds() + 60 * (time.getMinutes() + 60 * (((time.getHours() % 12) > 0) ? time.getHours() % 12 : 12)));	
		var secHandDegreePerMillisec = 0.006;
		var minHandDegreePerMillisec = 0.0001;
		var hrHandDegreePerMillisec = 0.000008333333;
				
		var secHandDegree = (millisecsPassedThisDay * secHandDegreePerMillisec - 90) % 360 + 'deg';
		var minHandDegree = (millisecsPassedThisDay * minHandDegreePerMillisec - 90) % 360 + 'deg';
		var hrHandDegree = (millisecsPassedThisDay * hrHandDegreePerMillisec - 90) % 360 + 'deg';
				
		$("#second").css({
			transform : 'rotate(' + secHandDegree + ')'
		});
		$("#minute").css({
			transform : 'rotate(' + minHandDegree + ')'
		});
		$("#hour").css({
			transform : 'rotate(' + hrHandDegree + ')'
		});
		
		hr = ((time.getHours() % 12) > 0) ? time.getHours() % 12 : 12;
				
		$('#hr').html(("0" + hr).slice(-2));
		$('#min').html(":" + ("0"  + time.getMinutes()).slice(-2));
		$('#sec').html(":" + ("0"  + time.getSeconds()).slice(-2));
	}
	
	var timerId = window.setInterval(showTime, 100);
}) ();