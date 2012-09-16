var defaults = {
	id: 23
};

function Bar(){
	return "hey";
};

exports.Bar      = Bar;
exports.defaults = defaults;


// exports.Bar = function(text){
// 	return text + text;
// };