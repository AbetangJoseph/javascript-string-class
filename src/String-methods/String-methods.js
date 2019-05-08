/* 
This method checks a string and returns true if it contains a vowel and false if it doesn't.
*/
String.prototype.hasVowels = function() {
	var regExPattern = /[aeiou]/gi;
	return regExPattern.test(this);
};

/* 
This method checks a string for lower-case alphabet(s) and convert to upper-case
*/
String.prototype.toUpper = function() {
	var regExPattern = /[a-z]/g;
	return this.replace(regExPattern, function(alphabet) {
		return String.fromCharCode(alphabet.charCodeAt(0) - 32);
	});
};

/* 
This method checks a string for upper-case alphabet(s) and convert to lower-case
*/
String.prototype.toLower = function() {
	var regExPattern = /[A-Z]/g;
	return this.replace(regExPattern, function(alphabet) {
		return String.fromCharCode(alphabet.charCodeAt(0) + 32);
	});
};
