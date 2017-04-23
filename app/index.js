const config = require('../config.js');
var btn = document.getElementById('sub');
btn.onclick = function() {
	var mobile = document.getElementById('mobile').value;
	var text = document.getElementById('output');
	text.innerHTML = mobile;
};

// console.log(text);
// text.innerHTML = "111";