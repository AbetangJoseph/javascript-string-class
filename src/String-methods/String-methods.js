/* 
This method checks a string and returns true if it contains a vowel and false if it doesn't.
*/
String.prototype.hasVowels = function() {
  var regExPattern = /[aeiou]/;
  return regExPattern.test(this);
};
