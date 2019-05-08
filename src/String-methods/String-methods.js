/* 
This method checks a string and returns true if it contains a vowel and false if it doesn't.
e.g 'cyst'.hasVowels() outputs false and 'code'.hasVowels() outputs true
*/
String.prototype.hasVowels = function() {
  var regExPattern = /[aeiou]/gi; // a global case insensitive search pattern for vowels
  return regExPattern.test(this); // the test method returns true or false if a vowel is found
};

/* 
This method checks a string for lower-case alphabet(s) and convert to upper-case
e.g 
*/
String.prototype.toUpper = function() {
  // a global case sensitive search pattern for only lower-case alphabets
  var regExPattern = /[a-z]/g;
  // calls a function on each alphabet match
  return this.replace(regExPattern, function(alphabet) {
    // subtract 32 from the current unicode to get it's equivalent in uppercase.
    return String.fromCharCode(alphabet.charCodeAt(0) - 32);
  });
};

/* 
This method checks a string for upper-case alphabet(s) and convert to lower-case
*/
String.prototype.toLower = function() {
  // a global case sensitive search pattern for only upper-case alphabets
  var regExPattern = /[A-Z]/g;
  // calls a function on each alphabet match
  return this.replace(regExPattern, function(alphabet) {
    // add 32 to the current unicode to get it's equivalent in lowercase.
    return String.fromCharCode(alphabet.charCodeAt(0) + 32);
  });
};

/* 
This method converts the first character(s) in a string to upper-case
*/
String.prototype.ucFirst = function() {
  // a global case sensitive word boundary search pattern
  var regExPattern = /(\b\w+\b)/g;
  // calls a function on each word match
  return this.replace(regExPattern, function(word) {
    // turn the first letter in the word to uppercase & get the rest of the word exluding the character on the first index.
    return word[0].toUpper() + word.substring(1);
  });
};

/* 
This method returns true if the string is a question
*/
String.prototype.isQuestion = function() {
  // a global case insensitive search pattern for a word that ends with a question mark
  var regExPattern = /\w+\?$/gi;
  // the test method returns true if there is a match and false if there isn't
  return regExPattern.test(this);
};

/* 
This method returns a list of the words in the string, as an Array excluding numbers and special characters
*/
String.prototype.words = function() {
  // a global case insensitive search pattern for non-space characters
  var regExPattern = /[^\s]+/gi;
  // calls match on the words and retunn an arrray
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
  // a global search pattern for digits that appear before the period sign in groups of three one time and beyound.
  var regExPattern = /\d(?=(\d{3}){1,}\.)/g;
  // replace digits that match the pattern by adding a comma sign in front of each capture group
  return this.replace(regExPattern, '$&,');
};

/* 
This method returns a number representation of a currency String.
e.g it changes '11,111.11' to 11111.11  
*/
String.prototype.fromCurrency = function() {
  var regExPattern = /,+/g;
  return Number.parseFloat(this.replace(regExPattern, ''));
};

/* 
This method returns each letter in the string as an inverse of its current case
e.g it changes 'Mr. Ben' to 'mR. bEN'
*/
String.prototype.inverseCase = function() {
  var regExPattern = /[a-zA-Z]/g;
  return this.replace(regExPattern, function(alphabet) {
    return !alphabet.match(/[a-z]/) ? alphabet.toLower() : alphabet.toUpper();
  });
};

/* 
This method returns each letter in the string as an inverse of its current case
e.g it changes 'Onomatopoeia' to 'oNoMaToPoEiA'
*/
String.prototype.alternatingCase = function() {
  var regExPattern = /[a-z]/gi;
  return this.replace(regExPattern, function(alphabet, index) {
    return index % 2 === 0 ? alphabet.toLower() : alphabet.toUpper();
  });
};

/* 
This method returns the numbers in words
e.g it changes 325 to 'three two five'
*/
String.prototype.numberWords = function() {
  var regExPattern = /\d/g;
  var arrayOfWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ];

  return this.replace(regExPattern, function(digit) {
    return arrayOfWords[digit] + ' ';
  });
};

/* 
This method returns true if the string is a digit(one number)
e.g 3 returns true but 30 returns false
*/
String.prototype.isDigit = function() {
  var regExPattern = /^\d{1}$/g;
  return regExPattern.test(this);
};
