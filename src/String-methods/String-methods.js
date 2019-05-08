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

/* 
This method converts the first character(s) in a string to upper-case
*/
String.prototype.ucFirst = function() {
  var regExPattern = /(\b\w+\b)/g;
  return this.replace(regExPattern, function(word) {
    return word[0].toUpper() + word.substring(1);
  });
};

/* 
This method returns true if the string is a question
*/
String.prototype.isQuestion = function() {
  var regExPattern = /\w+\?$/gi;
  return regExPattern.test(this);
};

/* 
This method returns a list of the words in the string, as an Array excluding numbers and special characters
*/
String.prototype.words = function() {
  var regExPattern = /[^\s]+/gi;
  return this.match(regExPattern);
};

/* 
This method returns the number of words in the string
*/
String.prototype.wordCount = function() {
  return this.words().length;
};

/* 
This method returns a currency representation of the String.
e.g it changes '11111.11' to '11,111.11'
*/
String.prototype.toCurrency = function() {
  var regExPattern = /\d(?=(\d{3}){1,}\.)/g;
  return this.replace(regExPattern, '$&,');
};