
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

	Dollar.prototype.css = function(property, value) {
		if(value !== undefined){
			var temp = {};
			temp[property] = value;
			compute(temp, this.elems);
		}
		else {
			compute(property, this.elems);
		}
	};

	Dollar.prototype.html = function(content) {
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
		  
	return function (element) {
		return new Dollar(element);
	};  
})();

