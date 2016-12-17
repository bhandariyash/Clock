////////////////////library///////////////////////////
		var $ = (function (element) {
		function compute(properties,elemArray) {
		  var x = Object.keys(properties);
			  console.log(properties);
		  for(var i = 0; i < elemArray.length; i++) {
			for(var j = 0; j < x.length; j++) {
			  var key = x[j];
			  (elemArray)[i].style[key] = properties[key];
			}
		  }
		}

		function Dollar(element) {
		  this.elems = document.querySelectorAll(element);
		}

		Object.defineProperty(Dollar.prototype,'length',{
		  get: function(){ return (this.elems).length;}
							  });

		Dollar.prototype.css = function(property, value){
		  if(value !== undefined){
			var temp = {};
			temp[property] = value;
			compute(temp, this.elems);
		  }
		  else{
			compute(property, this.elems);
		  }
		};

		Dollar.prototype.html = function(content){
		  for(var i = 0; i < this.length; i++) {
				(this.elems)[i].innerHTML = content;
			  }
		};

		function iterate(obj, array, counter, noOfCycles) {
			if(counter > noOfCycles) {		
				return;
			}
			for(var j = 0; j < array.length; j++) {
				obj.css(array[j]);
			}
			
		}
		  
		var statusForAnimate = "stop";
		var idForAnimate;
		var timerId;
		var i = 0;
		var j = 0;
		var timerInstance;
		Dollar.prototype.animate = function(ArrayOfPropertyValuePairs, timeInterval, noOfCycles) {
			
			
			if((timerId) && (statusForAnimate === "stop")) {
					return;
			}
			var flag;
			(function directFlow() {
				if(statusForAnimate === "resume-play") {
					statusForAnimate = "pause";
					timerInstance.pause();
					flag = -1;
				}
				else if(statusForAnimate === "pause") {
					statusForAnimate = "resume-play";
					timerInstance.resume();
					flag = -1;
				}
				else {}
			}) ();
			
			if(flag === -1) {
				return;
			}

			var obj = this;
			var start;
			
			
			
			function Timer() {
				var timerId, remainingTime = timeInterval;
				var continueTimerId;
				this.pause = function() {
					document.getElementById("button1").innerHTML = "Animate!";
					window.clearTimeout(timerId);
					remainingTime -= new Date() - start;
				};
				this.resume = function() {
					document.getElementById("button1").innerHTML = "Stop!";
					statusForAnimate = "resume-play";
					//if((! timerId) && (i === 0) && (j === 0)) {
						timerId = setInterval(iterate, timeInterval);
					//}
					/*else {
						continueTimerId = setTimeout(iterate, remainingTime);
						clearTimeout(continueTimerId);
						timerId = setInterval(iterate, timeInterval);
					}*/
					
					function iterate() {
						start = new Date();
						obj.css(ArrayOfPropertyValuePairs[j]);
						j++;
						if(j == ArrayOfPropertyValuePairs.length) {
							j = 0;
							i++;
						}
						document.getElementById("counter").innerHTML = i;
						if(i >= noOfCycles) {
							clearInterval(timerId);
							statusForAnimate = "stop";
							document.getElementById("button1").innerHTML = "Animate!";
							timerId = undefined;
							i = 0;
							j = 0;
						}
					}
				};
				this.resume();
			}

			timerInstance = new Timer();	
		};   
		  
		return function (element){
		  return new Dollar(element);
		};  
		})();
		////////////////////library///////////////////////////
		(function() {
			var r = 250;
			//var x = 50;
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
				
				var millisecs = time.getMilliseconds() + 1000 * (time.getSeconds() + 60 * (time.getMinutes() + 60 * (((time.getHours() % 12) > 0) ? time.getHours() % 12 : 12)));	
				var secHandDegreePerMillisec = 0.006;
				var minHandDegreePerMillisec = 0.0001;
				var hrHandDegreePerMillisec = 0.000008333333;
				
				var secHandDegree = (millisecs * secHandDegreePerMillisec - 90) % 360 + 'deg';
				var minHandDegree = (millisecs * minHandDegreePerMillisec - 90) % 360 + 'deg';
				var hrHandDegree = (millisecs * hrHandDegreePerMillisec - 90) % 360 + 'deg';
				
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
				document.getElementById('hr').innerHTML = ("0"  + hr).slice(-2);
				document.getElementById('min').innerHTML = ":" + ("0"  + time.getMinutes()).slice(-2);
				document.getElementById('sec').innerHTML = ":" + ("0"  + time.getSeconds()).slice(-2);
			}
			var timerId = window.setInterval(showTime, 100);
		}) ();